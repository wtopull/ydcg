function getAccount() {
	$.ajax({
		url: config.rootUrl + "scss/user/getAccount.do",
		data: {
			deviceToken: "html5",
			deviceType: "html5",
			userId: session_login.info.userId,
		},
		async: true,
		type: 'post',
		success: function(data) {
			console.log(data)
			//添加选项盒子
			var shoukuan = $(".shoukuan");
			//添加选项内容
			var info = data.info;
			//收款账户
			for(var i in info) {
				var _option = document.createElement("option");
				_option.value = info[i].accountId;
				_option.text = info[i].accountName;
				shoukuan.append(_option);
			}

		},
		error: function(xhr, type, errorThrown) {
			alert('网络异常，请稍后再试！');
		},
		complete: function() {
			$('#shoukuan').select2();
		}
	});
}

function getDoctor() {
	$.ajax({
		url: config.rootUrl + "scss/user/getDoctor.do",
		data: {
			deviceToken: "html5",
			deviceType: "html5",
			userId: session_login.info.userId,
		},
		async: true,
		type: 'post',
		success: function(data) {
			console.log(data)
			//添加选项盒子
			var doctor = $(".doctor");
			//添加选项内容
			var info = data.info;
			//收款账户
			for(var i in info) {
				var _option = document.createElement("option");
				_option.value = info[i].doctorId;
				_option.text = info[i].doctorName;
				doctor.append(_option);
			}

		},
		error: function(xhr, type, errorThrown) {
			alert('网络异常，请稍后再试！');
		},
		complete: function() {
			$('#doctor').select2();
		}
	});
}
function getDepart(ele) {
	$.ajax({
		url: config.rootUrl + "scss/user/getDepart.do",
		data: {
			deviceToken: "html5",
			deviceType: "html5",
			userId: session_login.info.userId,
		},
		async: true,
		type: 'post',
		success: function(data) {
			console.log(data)
			//添加选项盒子
			var keshi = $("."+ele);
			//添加选项内容
			var info = data.info;
			//收款账户
			for(var i in info) {
				var _option = document.createElement("option");
				_option.value = info[i].departId;
				_option.text = info[i].departName;
				keshi.append(_option);
			}
		},
		error: function(xhr, type, errorThrown) {
			alert('网络异常，请稍后再试！');
		},
		complete: function() {
			$('#'+ele).select2();
		}
	});
}