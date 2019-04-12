package controllers

import (
	"fmt"
	"io/ioutil"
	"strings"
)

func Ioutil(name string) {
	if contents, err := ioutil.ReadFile(name); err == nil {
		//因为contents是[]byte类型，直接转换成string类型后会多一行空格,需要使用strings.Replace替换换行符
		result := strings.Replace(string(contents), "\n", "", 1)
		fmt.Println(result)
	}
}
