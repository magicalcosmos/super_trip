package routers

import (
	"super_trip/controllers"

	"github.com/astaxie/beego"
)

func init() {
	beego.Router("/", &controllers.MainController{}, "get:Get")

	beego.Router("/sightRecreation/:id", &controllers.SightRecreationController{}, "get:GetDataByPage")

	// 文章管理
	beego.Router("/article", &controllers.ArticleController{})
	beego.Router("/article/list", &controllers.ArticleController{}, "get:List")
	beego.Router("/article/list/:id", &controllers.ArticleController{}, "get:GetByID")
	beego.Router("/article/create", &controllers.ArticleController{}, "get:Create;post:PostCreate")
	beego.Router("/article/update/:id", &controllers.ArticleController{}, "get:Update;post:PostUpdate")
	beego.Router("/article/delete/:id", &controllers.ArticleController{}, "get:Delete;post:PostDelete")
	beego.Router("/article/view/:id", &controllers.ArticleController{}, "get:View")
}
