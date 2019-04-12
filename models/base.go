package models

import (
	"github.com/astaxie/beego"
	"gopkg.in/LyricTian/lib.v2/mongo"
)

var (
	mongoHandler *mongo.Handler
)

func init() {
	url := beego.AppConfig.String("mongodb::url")
	handler, err := mongo.InitHandler(url)
	if err != nil {
		panic(err)
	}
	mongoHandler = handler
}
