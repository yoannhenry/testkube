package http

import (
	"net"
	"net/http"
	"time"
)

const (
	NetDialTimeout      = 5 * time.Second
	TLSHandshakeTimeout = 5 * time.Second
	ClientTimeout       = 10 * time.Second
)

func NewClient() *http.Client {
	var netTransport = &http.Transport{
		Dial: (&net.Dialer{
			Timeout: NetDialTimeout,
		}).Dial,
		TLSHandshakeTimeout: TLSHandshakeTimeout,
	}
	return &http.Client{
		Timeout:   ClientTimeout,
		Transport: netTransport,
	}
}

func NewSSEClient() *http.Client {
	return &http.Client{
		Timeout: time.Hour,
	}
}
