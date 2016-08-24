$(function(){
     $.extend({
        myTime: {
            /**
             * 当前时间戳
             * @return <int>        unix时间戳(秒)  
             */
            CurTime: function(){
                return Date.parse(new Date())/1000;
            },
            /**              
             * 日期 转换为 Unix时间戳
             * @param <string> 2014-01-01 20:20:20  日期格式              
             * @return <int>        unix时间戳(秒)              
             */
            DateToUnix: function(string) {
                var f = string.split(' ', 2);
                var d = (f[0] ? f[0] : '').split('-', 3);
                var t = (f[1] ? f[1] : '').split(':', 3);
                return (new Date(
                        parseInt(d[0], 10) || null,
                        (parseInt(d[1], 10) || 1) - 1,
                        parseInt(d[2], 10) || null,
                        parseInt(t[0], 10) || null,
                        parseInt(t[1], 10) || null,
                        parseInt(t[2], 10) || null
                        )).getTime() / 1000;
            },
            /**              
             * 时间戳转换日期              
             * @param <int> unixTime    待时间戳(秒)              
             * @param <bool> isFull    返回完整时间(Y-m-d 或者 Y-m-d H:i:s)              
             * @param <int>  timeZone   时区              
             */
            UnixToDate: function(unixTime, isFull, timeZone) {
                if (typeof (timeZone) == 'number')
                {
                    unixTime = parseInt(unixTime) + parseInt(timeZone) * 60 * 60;
                }
                var time = new Date(unixTime * 1000);
                var ymdhis = "";
                ymdhis += time.getUTCFullYear() + "-";
                ymdhis += (time.getUTCMonth()+1) + "-";
                ymdhis += time.getUTCDate();
                if (isFull === true)
                {
                    ymdhis += " " + time.getUTCHours() + ":";
                    ymdhis += time.getUTCMinutes() + ":";
                    ymdhis += time.getUTCSeconds();
                }
                return ymdhis;
            }
        }
    });
	
	var data=[{"alarmid":14017,"endtime":null,"fanDes":"A-02#","groupid":0,"id":9904,"psid":136,"starttime":{"date":19,"day":5,"hours":16,"minutes":48,"month":7,"nanos":0,"seconds":20,"time":1471596500000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":14017,"alarmname":"榻胯疆绠�-娌逛綅杩囦綆","alarmnameEn":"","alarmstate":0,"alarmtype":"","alarmunit":"榻胯疆绠�","defaultalarmstate":1,"priority":0},"wtid":2},{"alarmid":13067,"endtime":null,"fanDes":"A-03#","groupid":0,"id":9907,"psid":136,"starttime":{"date":19,"day":5,"hours":16,"minutes":48,"month":7,"nanos":0,"seconds":50,"time":1471596530000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":13067,"alarmname":"鍙樻〃-鍙剁墖1鍒跺姩鐢甸樆鍛婅","alarmnameEn":"","alarmstate":0,"alarmtype":"","alarmunit":"鍙樻〃","defaultalarmstate":1,"priority":0},"wtid":3},{"alarmid":13068,"endtime":null,"fanDes":"A-03#","groupid":0,"id":9908,"psid":136,"starttime":{"date":19,"day":5,"hours":16,"minutes":48,"month":7,"nanos":0,"seconds":50,"time":1471596530000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":13068,"alarmname":"鍙樻〃-鍙剁墖2鍒跺姩鐢甸樆鍛婅","alarmnameEn":"","alarmstate":0,"alarmtype":"","alarmunit":"鍙樻〃","defaultalarmstate":1,"priority":0},"wtid":3},{"alarmid":13069,"endtime":null,"fanDes":"A-03#","groupid":0,"id":9909,"psid":136,"starttime":{"date":19,"day":5,"hours":16,"minutes":48,"month":7,"nanos":0,"seconds":50,"time":1471596530000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":13069,"alarmname":"鍙樻〃-鍙剁墖3鍒跺姩鐢甸樆鍛婅","alarmnameEn":"","alarmstate":0,"alarmtype":"","alarmunit":"鍙樻〃","defaultalarmstate":1,"priority":0},"wtid":3},{"alarmid":14016,"endtime":null,"fanDes":"A-027#","groupid":0,"id":9984,"psid":136,"starttime":{"date":19,"day":5,"hours":16,"minutes":58,"month":7,"nanos":0,"seconds":15,"time":1471597095000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":14016,"alarmname":"榻胯疆绠�-婊よ姱鍫靛棰勮","alarmnameEn":"","alarmstate":0,"alarmtype":"","alarmunit":"榻胯疆绠�","defaultalarmstate":1,"priority":0},"wtid":27},{"alarmid":14016,"endtime":null,"fanDes":"A-030#","groupid":0,"id":10002,"psid":136,"starttime":{"date":19,"day":5,"hours":17,"minutes":1,"month":7,"nanos":0,"seconds":20,"time":1471597280000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":14016,"alarmname":"榻胯疆绠�-婊よ姱鍫靛棰勮","alarmnameEn":"","alarmstate":0,"alarmtype":"","alarmunit":"榻胯疆绠�","defaultalarmstate":1,"priority":0},"wtid":30},{"alarmid":14017,"endtime":null,"fanDes":"A-011#","groupid":0,"id":10175,"psid":136,"starttime":{"date":19,"day":5,"hours":17,"minutes":21,"month":7,"nanos":0,"seconds":55,"time":1471598515000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":14017,"alarmname":"榻胯疆绠�-娌逛綅杩囦綆","alarmnameEn":"","alarmstate":0,"alarmtype":"","alarmunit":"榻胯疆绠�","defaultalarmstate":1,"priority":0},"wtid":11},{"alarmid":14016,"endtime":null,"fanDes":"A-010#","groupid":0,"id":10190,"psid":136,"starttime":{"date":19,"day":5,"hours":17,"minutes":24,"month":7,"nanos":0,"seconds":30,"time":1471598670000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":14016,"alarmname":"榻胯疆绠�-婊よ姱鍫靛棰勮","alarmnameEn":"","alarmstate":0,"alarmtype":"","alarmunit":"榻胯疆绠�","defaultalarmstate":1,"priority":0},"wtid":10},{"alarmid":14016,"endtime":null,"fanDes":"A-02#","groupid":0,"id":10197,"psid":136,"starttime":{"date":19,"day":5,"hours":17,"minutes":29,"month":7,"nanos":0,"seconds":10,"time":1471598950000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":14016,"alarmname":"榻胯疆绠�-婊よ姱鍫靛棰勮","alarmnameEn":"","alarmstate":0,"alarmtype":"","alarmunit":"榻胯疆绠�","defaultalarmstate":1,"priority":0},"wtid":2},{"alarmid":14016,"endtime":null,"fanDes":"A-021#","groupid":0,"id":10264,"psid":136,"starttime":{"date":19,"day":5,"hours":17,"minutes":38,"month":7,"nanos":0,"seconds":25,"time":1471599505000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":14016,"alarmname":"榻胯疆绠�-婊よ姱鍫靛棰勮","alarmnameEn":"","alarmstate":0,"alarmtype":"","alarmunit":"榻胯疆绠�","defaultalarmstate":1,"priority":0},"wtid":21},{"alarmid":14107,"endtime":null,"fanDes":"A-022#","groupid":0,"id":10268,"psid":136,"starttime":{"date":19,"day":5,"hours":17,"minutes":38,"month":7,"nanos":0,"seconds":55,"time":1471599535000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":14107,"alarmname":"楂橀€熻酱-鍒硅溅鐗囩（鎹熸姤璀�","alarmnameEn":"","alarmstate":0,"alarmtype":"","alarmunit":"楂橀€熻酱","defaultalarmstate":1,"priority":0},"wtid":22},{"alarmid":14016,"endtime":null,"fanDes":"A-028#","groupid":0,"id":12260,"psid":136,"starttime":{"date":20,"day":6,"hours":8,"minutes":48,"month":7,"nanos":0,"seconds":25,"time":1471654105000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":14016,"alarmname":"榻胯疆绠�-婊よ姱鍫靛棰勮","alarmnameEn":"","alarmstate":0,"alarmtype":"","alarmunit":"榻胯疆绠�","defaultalarmstate":1,"priority":0},"wtid":28},{"alarmid":12000,"endtime":null,"fanDes":"A-017#","groupid":0,"id":13365,"psid":136,"starttime":{"date":21,"day":0,"hours":19,"minutes":9,"month":7,"nanos":0,"seconds":30,"time":1471777770000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":12000,"alarmname":"鍙樻祦鍣�-閫氳鏁呴殰","alarmnameEn":"","alarmstate":1,"alarmtype":"","alarmunit":"鍙樻祦鍣�","defaultalarmstate":1,"priority":50},"wtid":17},{"alarmid":14312,"endtime":null,"fanDes":"A-017#","groupid":0,"id":13371,"psid":136,"starttime":{"date":21,"day":0,"hours":19,"minutes":9,"month":7,"nanos":0,"seconds":35,"time":1471777775000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":14312,"alarmname":"鍋忚埅-鍋忚埅璇樊杩囧ぇ","alarmnameEn":"","alarmstate":0,"alarmtype":"","alarmunit":"鍋忚埅","defaultalarmstate":1,"priority":0},"wtid":17},{"alarmid":13067,"endtime":null,"fanDes":"A-04#","groupid":0,"id":13404,"psid":136,"starttime":{"date":21,"day":0,"hours":21,"minutes":9,"month":7,"nanos":0,"seconds":30,"time":1471784970000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":13067,"alarmname":"鍙樻〃-鍙剁墖1鍒跺姩鐢甸樆鍛婅","alarmnameEn":"","alarmstate":0,"alarmtype":"","alarmunit":"鍙樻〃","defaultalarmstate":1,"priority":0},"wtid":4},{"alarmid":13068,"endtime":null,"fanDes":"A-04#","groupid":0,"id":13529,"psid":136,"starttime":{"date":22,"day":1,"hours":2,"minutes":40,"month":7,"nanos":0,"seconds":20,"time":1471804820000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":13068,"alarmname":"鍙樻〃-鍙剁墖2鍒跺姩鐢甸樆鍛婅","alarmnameEn":"","alarmstate":0,"alarmtype":"","alarmunit":"鍙樻〃","defaultalarmstate":1,"priority":0},"wtid":4},{"alarmid":13069,"endtime":null,"fanDes":"A-04#","groupid":0,"id":13530,"psid":136,"starttime":{"date":22,"day":1,"hours":2,"minutes":41,"month":7,"nanos":0,"seconds":5,"time":1471804865000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":13069,"alarmname":"鍙樻〃-鍙剁墖3鍒跺姩鐢甸樆鍛婅","alarmnameEn":"","alarmstate":0,"alarmtype":"","alarmunit":"鍙樻〃","defaultalarmstate":1,"priority":0},"wtid":4},{"alarmid":14908,"endtime":null,"fanDes":"A-03#","groupid":0,"id":12500,"psid":136,"starttime":{"date":20,"day":6,"hours":13,"minutes":23,"month":7,"nanos":0,"seconds":0,"time":1471670580000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":14908,"alarmname":"鐢垫睜-鐢垫睜鏌滄俯搴﹀お楂�","alarmnameEn":"","alarmstate":0,"alarmtype":"","alarmunit":"鐢垫睜","defaultalarmstate":1,"priority":0},"wtid":3},{"alarmid":14016,"endtime":null,"fanDes":"A-026#","groupid":0,"id":12574,"psid":136,"starttime":{"date":20,"day":6,"hours":15,"minutes":23,"month":7,"nanos":0,"seconds":45,"time":1471677825000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":14016,"alarmname":"榻胯疆绠�-婊よ姱鍫靛棰勮","alarmnameEn":"","alarmstate":0,"alarmtype":"","alarmunit":"榻胯疆绠�","defaultalarmstate":1,"priority":0},"wtid":26},{"alarmid":14016,"endtime":null,"fanDes":"A-022#","groupid":0,"id":14147,"psid":136,"starttime":{"date":22,"day":1,"hours":9,"minutes":33,"month":7,"nanos":0,"seconds":5,"time":1471829585000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":14016,"alarmname":"榻胯疆绠�-婊よ姱鍫靛棰勮","alarmnameEn":"","alarmstate":0,"alarmtype":"","alarmunit":"榻胯疆绠�","defaultalarmstate":1,"priority":0},"wtid":22},{"alarmid":16000,"endtime":null,"fanDes":"A-014#","groupid":0,"id":14175,"psid":136,"starttime":{"date":22,"day":1,"hours":10,"minutes":5,"month":7,"nanos":0,"seconds":20,"time":1471831520000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":16000,"alarmname":"澶栭儴鍛戒护-SCADA鍋滄満 ","alarmnameEn":"","alarmstate":0,"alarmtype":"","alarmunit":"澶栭儴鍛戒护","defaultalarmstate":1,"priority":50},"wtid":14},{"alarmid":13007,"endtime":null,"fanDes":"A-014#","groupid":1,"id":14178,"psid":136,"starttime":{"date":18,"day":4,"hours":19,"minutes":0,"month":7,"nanos":0,"seconds":40,"time":1471518040000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":13007,"alarmname":"鍙樻〃-SDO璇诲彇鏁呴殰","alarmnameEn":"","alarmstate":1,"alarmtype":"","alarmunit":"鍙樻〃","defaultalarmstate":1,"priority":50},"wtid":14},{"alarmid":11008,"endtime":null,"fanDes":"A-014#","groupid":2,"id":14179,"psid":136,"starttime":{"date":18,"day":4,"hours":19,"minutes":0,"month":7,"nanos":0,"seconds":40,"time":1471518040000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":11008,"alarmname":"瀹夊叏閾�-鐪嬮棬鐙楄Е鍙�","alarmnameEn":"","alarmstate":1,"alarmtype":"","alarmunit":"瀹夊叏閾�","defaultalarmstate":1,"priority":50},"wtid":14},{"alarmid":11012,"endtime":null,"fanDes":"A-014#","groupid":0,"id":14180,"psid":136,"starttime":{"date":18,"day":4,"hours":19,"minutes":0,"month":7,"nanos":0,"seconds":40,"time":1471518040000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":11012,"alarmname":"瀹夊叏閾�-瀛樺偍缁х數鍣�","alarmnameEn":"","alarmstate":1,"alarmtype":"","alarmunit":"瀹夊叏閾�","defaultalarmstate":1,"priority":50},"wtid":14},{"alarmid":14012,"endtime":null,"fanDes":"A-014#","groupid":0,"id":14181,"psid":136,"starttime":{"date":18,"day":4,"hours":19,"minutes":0,"month":7,"nanos":0,"seconds":40,"time":1471518040000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":14012,"alarmname":"榻胯疆绠�-鍙戠數鏈洪珮閫熸椂榻胯疆绠辨补鍘嬭繃浣�","alarmnameEn":"","alarmstate":1,"alarmtype":"","alarmunit":"榻胯疆绠�","defaultalarmstate":1,"priority":50},"wtid":14},{"alarmid":16000,"endtime":null,"fanDes":"A-017#","groupid":0,"id":14182,"psid":136,"starttime":{"date":18,"day":4,"hours":19,"minutes":0,"month":7,"nanos":0,"seconds":40,"time":1471518040000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":16000,"alarmname":"澶栭儴鍛戒护-SCADA鍋滄満 ","alarmnameEn":"","alarmstate":0,"alarmtype":"","alarmunit":"澶栭儴鍛戒护","defaultalarmstate":1,"priority":50},"wtid":17},{"alarmid":16001,"endtime":null,"fanDes":"A-017#","groupid":0,"id":14183,"psid":136,"starttime":{"date":18,"day":4,"hours":19,"minutes":0,"month":7,"nanos":0,"seconds":40,"time":1471518040000,"timezoneOffset":-480,"year":116},"turbinealarms":{"alarmid":16001,"alarmname":"澶栭儴鍛戒护-HMI鍋滄満 ","alarmnameEn":"","alarmstate":0,"alarmtype":"","alarmunit":"澶栭儴鍛戒护","defaultalarmstate":1,"priority":50},"wtid":17}]
	function initErrorShow(data){
		$.ajax({
			type:"post",
			url:"",
			async:true,
			data:{"psid":$()},
			dataType:"json",
			success:function(data){
				$.each(data, function(i,ele) {
					if(i == 0){
						$("#").html(ele.fanDes+"风机");
						$("#").append('<tr><td>'+$.myTime.UnixToDate(ele.starttime.time,true)+'</td><td>'+ele.alarmid+'</td><td>'+ele.turbinealarms.alarmunit+'</td></tr>')
					}
					if(ele.groupid == 1){
						$("#").append('<tr><td>'+$.myTime.UnixToDate(ele.starttime.time,true)+'</td><td>'+ele.fanDes+'</td><td>'+ele.alarmid+'</td><td>'+ele.turbinealarms.alarmunit+'</td></tr>');
						$("#").append('<tr><td>'+$.myTime.UnixToDate(ele.starttime.time,true)+'</td><td>'+ele.fanDes+'</td><td>'+ele.alarmid+'</td><td>'+ele.turbinealarms.alarmunit+'</td><td><a dataId="'+ele.id+'" dataTime="'+$.myTime.UnixToDate(ele.starttime.time/1000,true)+'" dataName="'+ele.fanDes+'" dataErrorName="'+ele.turbinealarms.alarmunit+'" class="windTowError">详情</a></td></tr>');
					}else if(ele.groupid == 2){
						$("#").append('<tr><td>'+$.myTime.UnixToDate(ele.starttime.time,true)+'</td><td>'+ele.fanDes+'</td><td>'+ele.alarmid+'</td><td>'+ele.turbinealarms.alarmunit+'</td></tr>');
					}
				});
			}
		});
		
	}
	function showWindTowError(){
		$("#").html($(this).attr("dataName"));
		$()
	}
	console.log($.myTime.DateToUnix('2014-5-15 20:20:20'));
	console.log($.myTime.UnixToDate(1325347200,true));
})
