// Toast Plugin
(function ($) {
    var defaults = {
        title: "",
        message: "",
        type: "success", // success, error, info, warning
        duration: 5000
    };

    var createToastContainer = function () {
        var toastContainer = $("<div>").addClass("custom-toast-container").attr("id", "customToastContainer");
        $("body").append(toastContainer);
        return toastContainer;
    };

    var createToast = function (settings) {
        var iconColor;
        switch (settings.type) {
            case 'success':
                iconColor = '#47D764';
                svgIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM241 337l-17 17-17-17-80-80L161 223l63 63L351 159 385 193 241 337z"></path></svg>';
                break;
            case 'error':
                iconColor = '#ff355b';
                svgIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm97.9-320l-17 17-47 47 47 47 17 17L320 353.9l-17-17-47-47-47 47-17 17L158.1 320l17-17 47-47-47-47-17-17L192 158.1l17 17 47 47 47-47 17-17L353.9 192z"/></svg>';
                break;
            case 'info':
                iconColor = '#2F86EB';
                svgIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216 192V224h24 48 24v24 88h8 24v48H296 216 192V336h24zm72-144H224V128h64v64z"/></svg>';
                break;
            case 'warning':
                iconColor = '#FFC021';
                svgIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm24-384v24V264v24H232V264 152 128h48zM232 368V320h48v48H232z"/></svg>';
                break;
            default:
                iconColor = '#47D764';
                svgIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM241 337l-17 17-17-17-80-80L161 223l63 63L351 159 385 193 241 337z"></path></svg>';
        }

        var toastHTML = `
            <div class="custom-toast ${settings.type}">
                <div class="icon-container">
                    ${svgIcon}
                </div>
                <div class="content-container">
                    <p class="title">${settings.title}</p>
                    <p class="message">${settings.message}</p>
                </div>
                <button class="close-button">&times;</button>
            </div>
        `;

        var toast = $(toastHTML).appendTo("#customToastContainer");

        // Set timeout to automatically close the toast
        setTimeout(function () {
            closeCustomToast(toast);
        }, settings.duration);

        // Bind click event to close button
        toast.find('.close-button').click(function () {
            closeCustomToast(toast);
        });

        // Apply animation class after a short delay to trigger animation
        setTimeout(function () {
            toast.addClass("show");
        }, 100);

        return toast; // Enable chaining
    };

    var closeCustomToast = function (toast) {
        toast.removeClass("show");
        setTimeout(function () {
            toast.remove();
            if ($(".custom-toast-container .custom-toast").length === 0) {
                $("#customToastContainer").remove();
            }
        }, 300);
    };

    $.toast = function (options) {
        var settings = $.extend({}, defaults, options);

        if ($("#customToastContainer").length === 0) {
            createToastContainer();
        }

        return createToast(settings);
    };
})(jQuery);
