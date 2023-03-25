import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = document.querySelector("form");

  submitProcess(event:any)
  {
    event.preventDefault();
    if(this.verifyName())
    {
      $(".floatingInputMessage").css({color:"black"});
    }
    else
    {
      $(".validate-name").removeClass("valid-feedback");
    }

    if(this.verifyEmail())
    {
      $(".validate-email").addClass("valid-feedback");
    }
    else{
      $(".validate-email").removeClass("valid-feedback");
    }
    if(this.verifyPhone())
    {
      $(".validate-phone").addClass("valid-feedback");
    }
    else{
      $(".validate-phone").removeClass("valid-feedback");
    }
    if(this.verifyMessage())
    {
      $(".validate-message").addClass("valid-feedback");
    }
    else{
      $(".validate-message").removeClass("valid-feedback");
    }
  }

  verifyName():boolean
  {

    if($("#floatingInputName").val() == "" ||$("#floatingInputName").val() == null)
    {
      $(".floatingInputName").slideUp(500);
      return false;
    }
    else{
      $(".floatingInputName").slideDown(500);
      $(".validate-name").addClass("valid-feedback");
      return true;
    }

  }
  coloredName()
  {
    $(".floatingInputName").css({color:"black"});

  }

  verifyEmail():boolean
  {
    if($("#floatingInputEmail").val() == "" ||$("#floatingInputEmail").val() == null)
    {
      $(".floatingInputEmail").slideUp(500);
      $(".validate-email").addClass("valid-feedback");

      return false;
    }
    else{
      $(".floatingInputEmail").slideDown(500);
      let regex =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
      if (regex.test($("#floatingInputEmail").val())) {
        $(".validate-email").addClass("valid-feedback");
        return true;
      } else {
        $(".validate-email").removeClass("valid-feedback");
        return false;
      }
    }
    // floatingInputEmail
  }
  coloredEmail()
  {
    $(".floatingInputEmail").css({color:"black"});

  }

  verifyPhone():boolean
  {

    if($("#floatingInputPhone").val() == "" ||$("#floatingInputPhone").val() == null)
    {
      $(".floatingInputPhone").slideUp(500);

      return false;
    }
    else{
      $(".validate-phone").addClass("valid-feedback");
      $(".floatingInputPhone").slideDown(500);
      return true;
    }

  }
  coloredPhone()
  {
    $(".floatingInputPhone").css({color:"black"});

  }
  verifyMessage():boolean
  {
    if($("textarea").val() == "" ||$("textarea").val() == null)
    {
      console.log("okkkk")

      $(".floatingInputMessage").slideUp(500);
      return false;
    }
    else{
      $(".validate-message").addClass("valid-feedback");
      $(".floatingInputMessage").slideDown(500);
      return true;
    }

  }
  coloredMessage()
  {
    $(".floatingInputMessage").css({color:"black"});

  }

}
