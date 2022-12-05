package db

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/Hugovarellaa/curd-go/configs"
	_ "github.com/lib/pq"
)

func OpenConnection() (*sql.DB, error) {
	conf := configs.GetDB()

	sc := fmt.Sprintf("host=%s port=%s username=%s password=%s dbname=%s sslmode=disable", conf.Host, conf.Port, conf.Username, conf.Password, conf.Database)

	conn, err := sql.Open("postgres", sc)
	if err != nil {
		log.Fatal(err)
	}
	err = conn.Ping()
	return conn, err
}
