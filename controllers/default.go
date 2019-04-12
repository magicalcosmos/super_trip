package controllers

import (
	"net/http"

	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

func (this *MainController) Get() {
	// c.TplName = "index.html"
	this.Redirect("/article", http.StatusFound)
}

func (this *MainController) Index() {
	Ioutil("data/getSightRecreationList1.json")
	this.TplName = "index.html"
}
