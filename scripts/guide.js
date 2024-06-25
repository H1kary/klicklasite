document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.body.innerHTML = `
        <h1 class="not__available">В данный момент страница недоступна</h1>
        <div class="under__maintenance">
            <div class="gearbox">
                <div class="overlay"></div>
                <div class="gear one">
                    <div class="gear-inner">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                </div>
                <div class="gear two">
                    <div class="gear-inner">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                </div>
                <div class="gear three">
                    <div class="gear-inner">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                </div>
                <div class="gear four large">
                    <div class="gear-inner">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="goin__back">
            <form class="goin__back__form" action="https://klickla.ru">
                <button class="goin__back__form__button">
                    <span class="button_top goin__back__form__button__span"> Вернуться
                    </span>
                </button>
            </form>
        </div>`;
    }, 2000);
});
