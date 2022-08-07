function insert(num) {
    document.form.view.value = document.form.view.value + num;
}

function backspace() {
    var exp = document.form.view.value;
    document.form.view.value = exp.substring(0, exp.length - 1);
}

function equal() {
    var exp = document.form.view.value;
    if (exp) {
        document.form.view.value = eval(exp)
    }
}