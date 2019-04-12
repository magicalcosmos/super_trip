package controllers

import (
	"encoding/json"

	"github.com/astaxie/beego"
)

type Person struct {
	ResponseStatus string `json:"responseStatus"`
	result         string `json:"result"`
}

type SightRecreation struct {
}
type SightRecreationController struct {
	beego.Controller
}

func (this *SightRecreationController) GetDataByPage() {
	result := ResolveJSON("data/getSightRecreationList" + this.GetString(":id") + ".json")

	m := make(map[string]interface{})
	json.Unmarshal([]byte(result), &m)

	this.Data["json"] = m
	this.ServeJSON()
	return
}
