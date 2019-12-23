$(function(){
    $("#registericon1").click(function(){
		var a=$("#registermobile")[0].value;
		if(a!=""&&a!="输入手机号码"){$("#registermobile").val("");$("#registermobile").focus();}
	});

	$(".btnMenu").click(function(){
        $(".sideNav").addClass("block");
        setTimeout(function(){
            $(".sideNav").addClass("slide");
        },100)
    })
	$(".btnMenu-fx").click(function(){
        $(".sideNav-fx").addClass("block");
        setTimeout(function(){
            $(".sideNav-fx").addClass("slide");
        },100)
    })
	$(".btnMenu-bj").click(function(){
        $(".sideNav-bj").addClass("block");
        setTimeout(function(){
            $(".sideNav-bj").addClass("slide");
        },100)
    })
	$(".btnMenu-gdcz").click(function(){
        $(".sideNav-gdcz").addClass("block");
        setTimeout(function(){
            $(".sideNav-gdcz").addClass("slide");
        },100)
    })
	
    $(".navMask").click(function(){
        $(".sideNav").removeClass("slide");
        setTimeout(function(){
            $(".sideNav").removeClass("block");
        },300)
    })
	
	$(".navMask-fx").click(function(){
        $(".sideNav-fx").removeClass("slide");
        setTimeout(function(){
            $(".sideNav-fx").removeClass("block");
        },300)
    })
	
	$(".navMask-bj").click(function(){
        $(".sideNav-bj").removeClass("slide");
        setTimeout(function(){
            $(".sideNav-bj").removeClass("block");
        },300)
    })
	
	$(".navMask-gdcz").click(function(){
        $(".sideNav-gdcz").removeClass("slide");
        setTimeout(function(){
            $(".sideNav-gdcz").removeClass("block");
        },300)
    })
	
	//文章编辑
	$(".btnMenu-wz-1").click(function(){
        $(".sideNav").addClass("block");
        setTimeout(function(){
            $(".sideNav").addClass("slide");
        },100)
    })
	//我的文章
	$(".btnMenu-wz-2").click(function(){
        $(".sideNav").addClass("block");
        setTimeout(function(){
            $(".sideNav").addClass("slide");
        },100)
    })
	//分享文章
	$(".btnMenu-wz-3").click(function(){
        $(".sideNav").addClass("block");
        setTimeout(function(){
            $(".sideNav").addClass("slide");
        },100)
    })
	
	

    $("#backTop").click(function(){
        $("html, body").animate({ scrollTop: 0 }, 120);
    });

})

jQuery.fn.extend({
    //去除连接和表单元素虚线
    outline:function(){
        return this.each(function(){
            var _this = $(this) ;
            _this.focus(function(){
                _this.blur()
            })
        })
    },
    //添加类名并且清除同类该类名
    tabClass:function(className) {
        return this.each(function(){
            $(this).addClass(className).siblings().removeClass(className)
        })
    }
})