const render = {
    table: () => {
        let list = '';

        table.forEach((value, key) => {
            const { id, name, count, date_start, date_finish } = value;
            list += `
                <tr data-key="${key}">
                    <th scope="row">${id}</th>
                    <td>${name}</td>
                    <td>${count}</td>
                    <td>${date_start}</td>
                    <td>${date_finish}</td>
                    <td><i class="bi bi-receipt bi-button js-show-actions"></i></td>
                    <td><i class="bi bi-pencil  bi-button js-edit"></i></td>
                </tr>
            `;
        });

        let html = `
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col" data-sorter="id">#</th>
                        <th scope="col" data-sorter="name">Имя</th>
                        <th scope="col" data-sorter="count">кг / Шт.</th>
                        <th scope="col" data-sorter="date_start">Дата получения</th>
                        <th scope="col" data-sorter="date_finish">Дата окончания</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    ${list}
                </tbody>
            </table>
            <div class="text-end">
                <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#add-product-modal">Посмотреть все действия</button>
                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#add-product-modal">Взять новый продукт</button>
            </div>
        `;

        $('#table-wrap').html(html);
    },
    add_product_modal: () => {
        const html = `
        <div class="modal fade" id="add-product-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title">Добавление нового продукта</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
                <div class="modal-body" data-form="add_product">
                    <div class="mb-3">
                        <input type="text" class="form-control" name="name" data-required placeholder="Имя">
                    </div>
                    <div class="mb-3">
                        <div class="row g-3 align-items-center">
                            <div class="col-auto">
                                <input type="number" class="form-control" data-required placeholder="кг. / шт.">
                            </div>
                            <div class="col-auto">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="count" id="weight-radio" value="option1">
                                    <label class="form-check-label" for="weight-radio">кг.</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="count" id="count-radio" value="option2">
                                    <label class="form-check-label" for="count-radio">шт.</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <div class="row g-3 align-items-center">
                            <div class="col-auto">
                                <input type="text" class="form-control" data-datepicker data-required name="date_start" placeholder="Дата начала">
                            </div>
                            <div class="col-auto">
                                <input type="text" class="form-control" data-datepicker data-required name="date_finish" placeholder="Дата окончания">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick="render.add_product_modal();">Закрыть</button>
                    <button type="button" class="btn btn-primary" data-submit>Добавить</button>
                </div>
                </div>
            </div>
        </div>`;
        $('body #add-product-modal').remove();
        $('body').append(html);
        
        datepickers_init();
        forms_init();
    }
}