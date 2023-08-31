let uniqueInput   = document.getElementById('uniqueInputBox');
let customButtons = document.querySelectorAll('.custom-button');

        let expression = "";

        customButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const value = e.target.getAttribute('data-value');

                if (value === '=') {
                    try {
                        expression = eval(expression);
                        uniqueInput.value = expression;
                    } catch (error) {
                        uniqueInput.value = 'Error';
                    }
                } else if (value === 'Clear') {
                    expression = "";
                    uniqueInput.value = expression;
                } else if (value === 'Delete') {
                    expression = expression.slice(0, -1);
                    uniqueInput.value = expression;
                } else {
                    expression += value;
                    uniqueInput.value = expression;
                }
            });
        });
