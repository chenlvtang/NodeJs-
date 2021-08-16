$(function () {
  $("#signin").click(function () {
    let username = $('input[name ="username"]').val();
    let password = $('input[name ="password"]').val();

    if (username && password) {
      $.ajax({
        type: "POST",
        url: "/user/signin",
        data: {
          username: username,
          password: password,
        },
        success: function (data) {
          location.href = "/";
        },
        error: function (data) {
          showMessage(data.responseJSON.message);
        },
      });
      $('input[name ="username"]').val("");
      $('input[name ="password"]').val("");
    }
  });

  $("#signup").click(function () {
    let username = $('input[name ="username"]').val();
    let password1 = $('input[name ="password1"]').val();
    let password2 = $('input[name ="password2"]').val();

    if (username && password1 && password2) {
      if (password1 === password2) {
        $.ajax({
          type: "POST",
          url: "/user/signup",
          data: {
            username: username,
            password: password1,
          },
          success: function (data) {
            location.href = "/signin";
          },
          error: function (data) {
            showMessage(data.responseJSON.message);
          },
        });
        $('input[name ="username"]').val("");
        $('input[name ="password1"]').val("");
        $('input[name ="password2"]').val("");
      } else {
        showMessage("Password not match");
      }
    }
  });

  $("#send").click(function () {
    let to = $('input[name ="to"]').val();
    let subject = $('input[name ="subject"]').val();
    let contents = $('textarea[name ="contents"]').val();

    if (to && subject && contents) {
      $.ajax({
        type: "POST",
        url: "/admin/email",
        data: {
          to: to,
          subject: subject,
          text: contents,
        },
        success: function (data) {
          showMessage(data.message);
        },
        error: function (data) {
          showMessage(data.responseJSON.message);
        },
      });
      $('input[name ="to"]').val("");
    }
  });
});

function showMessage(msg) {
  $("#dialog-msg").text(msg);
  try {
    document.getElementById("dialog").showModal();
  } catch (err) {
    alert(msg);
  }
}
