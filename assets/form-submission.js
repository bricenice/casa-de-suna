var invalid=0;function checkField(e){var r=e.val();return e.siblings("p").remove(),e.prop("required")&&""===r?(e.after('<p class="error">Please fill in the field before continuing.</p>'),e.closest(".validation-wrapper").addClass("has-error"),invalid++,!1):"email"!==e.attr("type")||/(.+)@(.+){2,}\.(.+){2,}/.test(r)?(e.closest(".validation-wrapper").removeClass("has-error"),!0):(e.after('<p class="error">Please enter a valid email address.</p>'),invalid++,!1)}function checkAllFields(){return invalid=0,$(".error").remove(),$("#contact_form input, #contact_form textarea").each(function(){checkField($(this))}),!(0<invalid)}$("#contact_form input, #contact_form textarea").on("blur",function(){checkField($(this))}),$("#contact_form").on("submit",function(e){checkAllFields()||e.preventDefault()});