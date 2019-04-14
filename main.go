package main

import (
	_ "super_trip/routers"

	"github.com/astaxie/beego"
)

func main() {
	beego.SetStaticPath("/", "web/dist")
	beego.Run()
}
