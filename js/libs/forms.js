const forms_init = () => {
    $('[data-form]').each(function () {
        const form = $(this),
        submit = $('[data-submit]', form),
        inputs = $('input', form);

        const inputChange = (input) => {
            const required = input.attr('data-required') != undefined;
            const datepicker = input.attr('data-datepicker') != undefined;
            console.log(input.val);
        }

        inputs.bind('input', function () {
            inputChange($(this));
        });
        
        
    });
}