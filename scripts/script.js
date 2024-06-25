
document.addEventListener("DOMContentLoaded", function() {
        document.body.innerHTML = `
<header>
    <h1 class="header__klickla" id="klickla">Klickla</h1>
    <h2 class="header__button__ip">IP: mc.klickla.ru</h2>
</header>
<div class="vse">
    <button type="button" class="active__button">
      <span>Как Войти на сервер</span>
    </button>
    <form class="forma" action="http://mc.klickla.ru:8100" target="_blank">
    <button class="active__button">
        <span>
           3D Карта сервера
        </span>
      </button>
    </form>
    <form class="forma" action="https://discord.gg/c4j8rqXGZ4" target="_blank">
    <button class="active__button discord__button">
        <span>
           <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path></svg>
        </span>
      </button>
    </form>
</div>

<div class="new-content hidden">
    <div class="card1">
      <div class="number">1</div>
      <div class="textBox">
        <div class="textContent">
          <p class="card-heading">Версия игры</p>
        </div>
        <p class="card-text">Minecraft 1.21</p>
      </div>
    </div>
  </div>
  <div class="new-content hidden">
    <div class="card2">
      <div class="number">2</div>
      <div class="textBox">
        <div class="textContent">
          <p class="card-heading">Прочитать правила</p>
        </div>
        <p class="card-text">#📌┃правила</p>
      </div>
    </div>
  </div>
  <div class="new-content hidden">
    <div class="card3">
      <div class="number">3</div>
      <div class="textBox">
        <div class="textContent">
          <p class="card-heading">Создать Тикет</p>
        </div>
        <p class="card-text">#📩┃создать-заявку</p>
      </div>
    </div>
  </div>
  <div class="new-content hidden">
    <div class="card4">
      <div class="number">4</div>
      <div class="textBox">
        <div class="textContent">
          <p class="card-heading">Ожидать добавления</p>
        </div>
        <p class="card-text">Скоро модераторы проверят твой тикет</p>
      </div>
    </div>
  </div>
        `;

        const buttonIp = document.querySelector('.header__button__ip');
        
        if (navigator.clipboard) {
            buttonIp.addEventListener('click', function() {
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
                            // element.classList.remove('fade-in')
                        }, 250);
                        setTimeout(function() {
                            element.textContent = originalText;
                            element.classList.remove('fade-in')
                        }, 1100);
                    }, 2000);
                }).catch(function(error) {
                    console.error('Ошибка копирования текста: ', error);
                });
            });
        } else {
            console.error('Clipboard API not supported');
        }
    }, 2000);


    // document.addEventListener('DOMContentLoaded', function() {
    //     const button = document.querySelector('.active__button');
    //     const oldContent = document.querySelectorAll('body > :not(.new-content)');
    //     const newContent = document.querySelector('.new-content');
  
    //     button.addEventListener('click', function() {
    //       oldContent.forEach(element => {
    //         element.classList.add('fade-out');
    //         element.addEventListener('animationend', function() {
    //           element.style.display = 'none';
    //           if (Array.from(oldContent).every(elem => getComputedStyle(elem).display === 'none')) {
    //             newContent.classList.remove('hidden');
    //             newContent.classList.add('fade-in');
    //           }
    //         }, { once: true });
    //       });
    //     });
    //   });

    document.addEventListener('DOMContentLoaded', function() {
        const button = document.querySelector('.active__button');
        const oldContent = document.querySelectorAll('body > :not(.new-content)');
        const newContent = document.querySelectorAll('.new-content');
  
        button.addEventListener('click', function() {
          oldContent.forEach(element => {
            element.classList.add('fade-out');
            element.addEventListener('animationend', function() {
              element.style.display = 'none';
              if (Array.from(oldContent).every(elem => getComputedStyle(elem).display === 'none')) {
                newContent.forEach(element => {
                    element.classList.remove('hidden');
                    element.classList.add('fade-in');
                })
              }
            }, { once: true });
          });
        });
      });