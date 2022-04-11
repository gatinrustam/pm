const pointmaticData = {
    parentClass: 'pointmatic',
    elementType: {
        h1: 'h1',
        div: 'div',
        span: 'span',
    }
}

const body = document.body;
const app = document.getElementById('external');
const appContent = document.createElement('form');
appContent.classList.add(`${pointmaticData.parentClass}__form`);
app.appendChild(appContent);

const renderModal = (element) => {
    // render modal
    const parent = document.createElement('div');
    parent.classList.add(`${pointmaticData.parentClass}__modals`);
    app.appendChild(parent);

    const renderElement = document.createElement('div');
    renderElement.classList.add(`${pointmaticData.parentClass}__modal`);
    renderElement.id = element.id;

    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal__head');

    renderElement.appendChild(modalHeader);

    const modalTitle = document.createElement('h1');
    modalTitle.classList.add('modal__title');
    modalTitle.innerText = element.title;

    const closeModal = document.createElement('div');
    closeModal.classList.add('modal__close');

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeModal);

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal__content');

    modalContent.innerText = element.content;

    renderElement.appendChild(modalContent);

    parent.appendChild(renderElement);
}

const renderSelect = (element) => {
    const parent = document.createElement(elementType.div);
    parent.classList.add(`${pointmaticData.parentClass}__row`);
    appContent.appendChild(parent);

    const select = document.createElement(elementType.div);
    select.classList.add(`${pointmaticData.parentClass}__row`);

}

const renderElement = (element) => {
    // parent generate
    const parent = document.createElement('div');
    parent.classList.add(`${pointmaticData.parentClass}__row`);
    appContent.appendChild(parent);

    // element.name generate
    const renderElement = document.createElement(element.element);
    renderElement.classList.add(`${pointmaticData.parentClass}__${element.element}`);
    renderElement.id = element.id;

    if (element.class) {
        renderElement.classList.add(element.class);
    }

    // add type (input exclusion)
    if (element.element === 'input' || element.element === 'button') {
        renderElement.setAttribute('type', element.type);
    }

    // select exclusion
    if (element.element === 'select') {
        renderElement.setAttribute('name', element.name);

        element.options.map((option) => {
            const selectOption = document.createElement('option');
            selectOption.setAttribute('value', `${element.id}_${option.value}`);
            selectOption.innerText = option.value;

            renderElement.appendChild(selectOption);
        });
    }

    // label exclusion
    if (element.label && element.label === true) {
        const labelInput = document.createElement('label');
        labelInput.setAttribute('for', element.id);
        labelInput.innerText = element.name;
        parent.appendChild(labelInput);
    }

    parent.appendChild(renderElement);

    // set content inner block (content exclusion)
    if (element.content) {
        renderElement.innerText = element.content;
    }

    // set placeholder (placeholder exclusion)
    if (element.placeholder) {
        renderElement.setAttribute('placeholder', element.placeholder);
    }
};

window.addEventListener('load', () => {
    formInstruction.map((element) => {
        if (element.element === 'modal') {
            renderModal(element);
        } else {
            renderElement(element);
        }
    });

    const textareaList = document.querySelectorAll('textarea');

    textareaList.forEach((textarea) => {
        textarea.addEventListener('input', () => {
            textarea.style.height = '';
            textarea.style.height = `${textarea.scrollHeight}px`;
        });
    });

    const modalClose = document.querySelectorAll(`.modal__close`);

    modalClose.forEach((close) => {
        close.addEventListener('click', () => {
            const modalList = document.querySelectorAll(`.${pointmaticData.parentClass}__modals`);

            modalList.forEach((modal) => {
                modal.classList.toggle('modal--open');
            });
        });
    });





    const open = document.querySelector('.open_modal');

    open.addEventListener('click', (e) => {
        e.preventDefault();

        const modalList = document.querySelectorAll(`.${pointmaticData.parentClass}__modals`);

        modalList.forEach((modal) => {
            modal.classList.toggle('modal--open');
        });
    });
});