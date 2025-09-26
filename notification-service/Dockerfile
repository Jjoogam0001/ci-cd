FROM golang:1.25

WORKDIR /app

COPY . .

RUN go build -o /usr/local/bin/notification-service .

CMD ["notification-service"]
