document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.body.innerHTML = `
            <header>
                <h1 class="header__klickla" id="klickla">Klickla</h1>
                <h2 class="header__button__ip">IP: mc.klickla.ru</h2>
            </header>
            <div class="vse">
                <a class="link link__guide" href="pages/guide.html" rel="noopener noreferrer">Как зайти на сервер?</a>
                <a class="link link__discord" href="https://discord.gg/pKewaXdsrf" target="_blank" rel="noopener noreferrer">Discord канал</a>
                <a target="_blank" class="link link__site" href="http://mc.klickla.ru:8123">Онлайн карта</a>
            </div>
        `;

        document.querySelector('.header__button__ip').addEventListener('click', function() {
            const textToCopy = "mc.klickla.ru";
            const element = this;
            navigator.clipboard.writeText(textToCopy).then(function() {
                const originalText = element.textContent;
                element.classList.add('fade-out');
                setTimeout(function() {
                    element.textContent = "Скопировано!";
                    element.classList.remove('fade-out');
                    element.classList.add('fade-in');
                }, 250);

                setTimeout(function() {
                    element.classList.remove('fade-in');
                    element.classList.add('fade-out');
                    setTimeout(function() {
                        element.textContent = originalText;
                        element.classList.remove('fade-out');
                        element.classList.add('fade-in');
                    }, 250);
                }, 2000);
            }).catch(function(error) {
                console.error('Ошибка копирования текста: ', error);
            });
        });
    }, 2000);
});
