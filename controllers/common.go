package controllers

import (
	"bytes"
	"io/ioutil"
)

// 解析json文件
func ResolveJSON(name string) []byte {
	buf := bytes.NewBuffer(nil)
	if contents, err := ioutil.ReadFile(name); err == nil {
		//因为contents是[]byte类型，直接转换成string类型后会多一行空格,需要使用strings.Replace替换换行符
		return contents
	}
	return buf.Bytes()
}
