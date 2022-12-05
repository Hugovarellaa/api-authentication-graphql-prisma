package models

import "github.com/Hugovarellaa/curd-go/db"

func Update(id int64, todo Todo) (int64, error) {
	conn, err := db.OpenConnection()
	if err != nil {
		return 0, err
	}
	defer conn.Close()

	res, err := conn.Exec("UPDATE todo SET title=$2, description=$3, done=$3 WHERE id=$1", id, todo.Title, todo.Description, todo.Done)
	if err != nil {
		return 0, err
	}

	return res.RowsAffected()
}
