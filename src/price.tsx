function manicurePrice() {
  return (
    <>
      <div> Маникюр классический/ аппаратный/ комбинированный - 700 р. </div>
      <div> Педикюр классический/ аппаратный/ smart  - 1700 р. </div>
      <div> Покрытие гель-лаком - 1100 р. </div>
      <div> Покрытие лаком - 200 р. </div>
      <div> Укрепление/выравнивание - 300 р. </div>
      <div> Ремонт ногтей - 150/500 р. </div>
      <div> Наращивание - 2500 р. </div>
      <div> Дизайн -  от 50 р. </div>
    </>
  );
}

function manPrice() {
  return (
    <>
      <div> Стрижка машинкой - 200-400 р. </div>
      <div> Классическая     - 500-600 р. </div>
      <div> Удлиненная       - 700-800 р. </div>
      <div> Коррекция бороды - 200 р. </div>
    </>
  );
}

function womanPrice() {
  return (
    <>
      <div style={{color: 'black'}}>  Длина волос:</div>
      <div> Короткие - 700-900 р. </div>
      <div> Средние  - 900-1300 р. </div>
      <div> Длинные  - 1000-1500 р. </div>
      <div style={{color: 'black'}}>  Укладки:</div>
      <div> Короткие - 600-800 р. </div>
      <div> Средние  - 800-1000 р. </div>
      <div> Длинные  - 1000-1500 р. </div>
    </>
  );
}

function colorPrice() {
  return (
    <>
      <div> Кератин - 3000-6000 р. </div>
      <div> Ботокс  - 2000-5000 р. </div>
      <div style={{color: 'black'}}>  Сложное окрашивание:  </div>
      <div> Короткие -  1000-2000 р. </div>
      <div> Средние  -  2000-3500 р. </div>
      <div> Длинные  -  3500-5000 р. </div>
      <div style={{color: 'black'}}> Окрашивание в один тон: </div>
      <div> Короткие -  800-1000 р. </div>
      <div> Средние  -  1000-1500 р. </div>
      <div> Длинные  -  1500-2500 р. </div>
      <div style={{color: 'black'}}> Материалы: </div>
      <div> Краситель - 600р./60гр. </div>
      <div> Обесцвечивающий порошок - 250р./30гр. </div>
      <div>  </div>
      

    </>
  );
}

export { manicurePrice, manPrice, womanPrice, colorPrice };
