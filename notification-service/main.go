package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os"

	"github.com/streadway/amqp"
)

type Event struct {
	Type    string      `json:"type"`
	Payload interface{} `json:"payload"`
}

func failOnError(err error, msg string) {
	if err != nil {
		log.Fatalf("%s: %s", msg, err)
	}
}

func main() {
	rabbitmqURL := os.Getenv("RABBITMQ_URL")
	if rabbitmqURL == "" {
		rabbitmqURL = "amqp://guest:guest@localhost:5672/"
	}

	conn, err := amqp.Dial(rabbitmqURL)
	failOnError(err, "Failed to connect to RabbitMQ")
	defer conn.Close()

	ch, err := conn.Channel()
	failOnError(err, "Failed to open a channel")
	defer ch.Close()

	exchangeName := "order_events"
	err = ch.ExchangeDeclare(
		exchangeName,
		"topic",
		true,
		false,
		false,
		false,
		nil,
	)
	failOnError(err, "Failed to declare exchange")

	queue, err := ch.QueueDeclare(
		"notification_queue",
		true,
		false,
		false,
		false,
		nil,
	)
	failOnError(err, "Failed to declare queue")

	routingKeys := []string{"order.created", "payment.completed", "shipment.requested", "user.login", "user.count", "user.registered"}
	for _, key := range routingKeys {
		err = ch.QueueBind(
			queue.Name,
			key,
			exchangeName,
			false,
			nil,
		)
		failOnError(err, fmt.Sprintf("Failed to bind queue to key %s", key))
	}

	msgs, err := ch.Consume(
		queue.Name,
		"",
		true,
		false,
		false,
		false,
		nil,
	)
	failOnError(err, "Failed to register a consumer")

	log.Println("Notification Service is listening for events...")

	forever := make(chan bool)

	go func() {
		for d := range msgs {
			log.Printf("Received message: %s", d.Body)

			var event Event
			err := json.Unmarshal(d.Body, &event)
			if err != nil {
				log.Println("Error unmarshalling event:", err)
				continue
			}

			handleEvent(event)
		}
	}()

	<-forever
}

func handleEvent(event Event) {
	log.Printf("Handling event: %s", event.Type)
	fmt.Printf("Notification: %v\n", event.Payload)
}
