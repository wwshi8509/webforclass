var mysql  = require('mysql');
			var connection = mysql.createConnection({
  			host     : 'localhost',
  			user     : 'root',
  			//port	 : '3306',
  			password : 'wwshi0914',
  			database : 'bbs'
});
 
connection.connect();
 
var  sql = 'SELECT * FROM websites';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
});
 
connection.end();
function Controller()
{
	this.userHasInput = function(){
	console.log("222");
	var event = "";
	event = View1.getbtn() ;
	console.log(event);
	 switch(event)
    {
    	case'login':
    		var account = View1.getaccount() ;
    		var password = View1.getpassword() ;
    		//if(Model.LoginCheck(account,password)){
    			//Model.setstate("post_page");
    		
    			console.log("111");
    			
    	//	}
    		break;
    		
    	case 'signup':
    		Model.setstate("signup_page");
    		var name = View1.getname();
    		var account = View1.getaccount();
    		var password = View1.getpassword();
    		var gender = View1.getgender();
    		//Model.AddUser(name, account, password, gender);
    		console.log("signupHasClicked");
    		break;
    	case 'postclick':
    		Model.setstate("post_page");
    		break;
    	case 'cancel':
    		Model.setstate("post_page");
    		break;
    	case 'edit':
    		Model.setstate("edit_page");
    		break;
    	case 'inviteclick':
    		break;
    	case 'postbtn':
    		//console.log("write");
    		Model.setstate("writepost");
    		break;
    	case 'profilebtn':
    		Model.setstate("profile_page");
    		break;
    	case 'signupconfirm':{
    		Model.write();
    		Model.setstate("post_page");
    		break;}
    	case 'signupcancel':
    		Model.setstate("login_page");
    		break;
    	case 'likebtn':
    		break;
    	case 'editprofileconfirm':
    		Model.setstate("profile_page");
    		break;
    	case 'editprofilecancel':
    		Model.setstate("profile_page");
    		break;
    	case 'backbtn':
    		Model.setstate("post_page");
    		break;
    	default :
    		//Model.setstate("post_page");
     }
	}
	
}
function Model() {
	var state= "";
	this.setstate = function(string){
	
		state = string ;
		View1.stateHasChanged();
	}
	
	this.getState = function(){
		
		return state ;
	}
}

var Model = new Model() ;
var Controller = new Controller();
function View(){
	var account = "" ;
	var password = "" ;
	var whichbtn = "" ;
	var post_board = "" ;
	var post_title = "";
	var post = "";
	var state = "" ;
	var signup_account = "";
	var gender = "";
	var signup_password ="";
	var name = "";
	var department = "";
	var interest1 = "";
	var interest2 = "";
	var interest3 = "";
	var family = "";
	
	this.loginclick = function(){
		console.log("我是login");
		account = document.getElementById("account_t").value;
		console.log(account);
		password = document.getElementById("password_t").value;
		console.log(password);
		whichbtn = "login";
		Controller.userHasInput();
		
	}

	this.signupclick = function(){
		console.log("我是signup");
		whichbtn = "signup" ;
		Controller.userHasInput();
	}

	this.postclick = function(){
		console.log("我是post");
		post_board = document.getElementById("chooseboard_s").value;
		console.log(post_board);
		post_title = document.getElementById("title_t").value;
		console.log(post_title);
		post = document.getElementById("post_t").value;
		console.log(post);
		whichbtn = "postclick";
		Controller.userHasInput();
	}

	this.cancelclick = function(){
		console.log("我是cancel");
		whichbtn = "cancel";
		Controller.userHasInput();
	}

	this.edit = function(){
		console.log("edit");
		whichbtn = "edit";
		Controller.userHasInput();
	}

	this.inviteclick = function(){
		console.log("invite");
		whichbtn = "inviteclick";
		Controller.userHasInput();
	}
	
	this.postbtnclick = function(){
		console.log("postbtn");
		whichbtn = "postbtn" ;
		Controller.userHasInput();
	}
	
	this.profilebtnclick = function(){
		console.log("profilebtn");
		whichbtn = "profilebtn" ;
		Controller.userHasInput();
	}
	
	this.signupconfirmclick = function(){
		console.log("signupconfirmclick");
		if(document.getElementById("password_t").value==document.getElementById("password_confirm_t").value){
			whichbtn = "signupconfirm";
			signup_account = document.getElementById("account_t").value;
			signup_password = document.getElementById("password_t").value;
			gender = document.getElementById("gender_s").value;
			name = document.getElementById("name_t").value;
			console.log(signup_account);
			console.log(signup_password);
			console.log(gender);
			console.log(name);
			Controller.userHasInput();
		}
		else{
			alert("密碼不一致");
		}
	}
	
	this.signupcancelclick = function(){
		console.log("signupcancel");
		whichbtn = "signupcancel" ;
		Controller.userHasInput();
	}
	
	this.backclick = function(){
		console.log("backbtn");
		whichbtn = "backbtn" ;
		Controller.userHasInput();
	}
	
	this.likeclick = function(){
		console.log("likebtn");
		whichbtn = "likebtn" ;
		Controller.userHasInput();
	}
	
	this.editprofileconfirmclick = function(){
		console.log("editprofileconfirm");
		whichbtn = "editprofileconfirm" ;
		department = document.getElementById("department_t").value;
		interest1 = document.getElementById("interest1_t").value;
		interest2 = document.getElementById("interest2_t").value;
		interest3 = document.getElementById("interest3_t").value;
		console.log(department);
		console.log(interest1);
		console.log(interest2);
		console.log(interest3);
		Controller.userHasInput();
	}
	
	this.editprofilecancelclick = function(){
		console.log("editprofilecancel");
		whichbtn = "editprofilecancel" ;
		Controller.userHasInput();
	}
	
	this.newfamilyclick = function(){
		console.log("newfamilyclick");
		whichbtn = "newfamily" ;
		family = document.getElementById("family_t").value;
		console.log(family);
		Controller.userHasInput();
	}
	
	this.stateHasChanged = function(){
		console.log("state has changed")
		state = Model.getState() ;
		this.changeView() ;
	}

	this.changeView = function(){
		switch(state){
			case "post_page" :
				location.replace('boardtitle.html');
				break;
			case "profile_page" :
				location.replace('self_introduction.html');
				break;
			case "writepost" :
				location.replace('writepost.html');
				break;
			case "edit_page" :
				location.replace('editprofile.html');
				break;
			case "signup_page" :
				location.replace('signup_page.html');
				break;
			case "readpost_page" :
				location.replace('readpost.html');
				break;
			case "login_page" :
				location.replace('login.html');
				break;
			default :
			
		}
	}
	
	this.getbtn = function(){
		return whichbtn ;
	}
	
	this.getaccount = function(){
		return account ;
	}
	
	this.getpassword = function(){
		return password ;
	}
	
	this.getpost_board = function(){
		return post_board ;
	}
	
	this.getpost_title = function(){
		return post_title ;
	}
	
	this.getpost = function(){
		return post ;
	}
	
	this.getsignup_account = function(){
		return signup_account ;
	}
	
	this.getgender = function(){
		return gender ;
	}
	
	this.getsignup_password = function(){
		return signup_password ;
	}
	
	this.getname = function(){
		return name ;
	}
	
	this.getdepartment = function(){
		return department ;
	}
	
	this.getinterest1 = function(){
		return interest1 ;
	}
	
	this.getinterest2 = function(){
		return interest2 ;
	}
	
	this.getinterest3 = function(){
		return interest3 ;
	}
	
	this.getfamily = function(){
		return family ;
	}
}

var View1 = new View()


























