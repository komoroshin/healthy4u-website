# ROI Calculator - Структура и контент

> Этот файл содержит полную структуру, контент и **логику работы** ROI калькулятора для создания нового дизайна.

---

## 1. HERO SECTION

### Структура:
- Главный заголовок
- Подзаголовок

### Контент:

**Главный заголовок (H1):**
- "Calculate your savings."

**Подзаголовок:**
- "See the financial impact of implementing Healthy4U in your practice."

---

## 2. CALCULATOR SECTION (2 колонки)

### Структура:
- Левая колонка: Inputs (5 полей ввода)
- Правая колонка: Results (5 карточек результатов)

---

### ЛЕВАЯ КОЛОНКА - YOUR PRACTICE

**Заголовок:**
- "Your practice"

### 5 полей ввода:

**Поле 1 - Number of Physicians:**
- Label: "Number of Physicians"
- Input ID: `physicians`
- Type: number
- Default value: 3
- Min: 1
- Max: 100
- Helper text: "Full-time equivalent physicians in your practice"

**Поле 2 - Physician Hourly Rate:**
- Label: "Physician Hourly Rate ($)"
- Input ID: `hourlyRate`
- Type: number
- Default value: 50
- Min: 10
- Max: 500
- Helper text: "Average hourly compensation (salary ÷ 2080 hours/year)"

**Поле 3 - Hours Saved per Week:**
- Label: "Hours Saved per Week"
- Input ID: `hoursSaved`
- Type: number
- Default value: 4
- Min: 0
- Max: 20
- Step: 0.5
- Helper text: "Expected time savings per physician (typically 4-6 hours)"

**Поле 4 - Pricing Tier:**
- Label: "Pricing Tier"
- Input ID: `pricingTier`
- Type: select
- Options:
  - "Founder's Circle - $174/month (30% off)" → value: 174
  - "Early Adopter - $199/month (20% off)" → value: 199
  - "Launch Partner - $224/month (10% off)" → value: 224
  - "Standard - $249/month" → value: 249
- Default: первый вариант (Founder's Circle)
- Helper text: "Limited-time early adopter pricing available"

**Поле 5 - Current Monthly Costs:**
- Label: "Current Monthly Costs ($)"
- Input ID: `currentCosts`
- Type: number
- Default value: 0
- Min: 0
- Max: 10000
- Helper text: "Existing costs you'll eliminate (old scribe service, etc.)"

---

### ПРАВАЯ КОЛОНКА - YOUR RESULTS

**Заголовок:**
- "Your results"

### 5 карточек результатов:

**Карточка 1 - Monthly Time Savings:**
- Label (маленький): "Monthly Time Savings"
- Value ID: `monthlySavings`
- Unit: "per month"
- Стиль: оранжевый градиент

**Карточка 2 - Healthy4U Monthly Cost:**
- Label (маленький): "Healthy4U Monthly Cost"
- Value ID: `monthlyCost`
- Unit: "per month"
- Стиль: серый градиент

**Карточка 3 - Net Monthly Savings:**
- Label (маленький): "Net Monthly Savings"
- Value ID: `netMonthlySavings`
- Unit: "per month"
- Стиль: оранжевый градиент

**Карточка 4 - Payback Period:**
- Label (маленький): "Payback Period"
- Value ID: `paybackPeriod`
- Unit: "months"
- Стиль: серый градиент

**Карточка 5 - 3-Year ROI:**
- Label (маленький): "3-Year ROI"
- Value ID: `roi3Year`
- Additional text ID: `roiPercent` (показывает процент возврата)
- Unit: "(X% return)"
- Стиль: оранжевый градиент

---

## 3. COMPARISON SECTION

### Структура:
- Заголовок + описание
- Таблица сравнения с конкурентами

### Контент:

**Заголовок:**
- "Compare platforms"

**Описание:**
- "See how Healthy4U stacks up against competitors"

**Таблица (ID: comparisonBody):**

Колонки:
1. "Solution" (название решения)
2. "Monthly/Physician" (цена за врача в месяц)
3. "Features" (функции)
4. "Patient Side" (есть ли приложение для пациентов)
5. "Year 1 Total" (стоимость за 1 год)

Данные заполняются JavaScript из константы COMPETITORS

---

## 4. BREAKDOWN SECTION

### Структура:
- Заголовок + описание
- Таблица 3-year breakdown

### Контент:

**Заголовок:**
- "3-year breakdown"

**Описание:**
- "See your cumulative savings over time"

**Таблица (ID: breakdownBody):**

Колонки:
1. "Metric" (метрика)
2. "Year 1" (первый год)
3. "Year 2" (второй год)
4. "Year 3" (третий год)
5. "Total (3-Year)" (итого за 3 года)

Строки:
1. "Time Savings (Benefits)" - экономия времени
2. "Healthy4U Costs" - стоимость Healthy4U
3. "Eliminated Costs" - устраненные затраты
4. "Net Savings" - чистая экономия (выделена жирным)

Данные заполняются JavaScript из функции updateBreakdownTable

---

## 5. CTA SECTION

### Структура:
- Заголовок
- Подзаголовок
- 2 CTA кнопки

### Контент:

**Заголовок:**
- "Ready to get started?"

**Подзаголовок:**
- "Join the first 10 clinics and save 30% for life."

**CTA кнопки:**
1. "Book a Demo" → index.html
2. "See Case Study" → index.html#case-study

---

## ЛОГИКА РАБОТЫ КАЛЬКУЛЯТОРА (JavaScript)

### ВАЖНО: Эти инструкции необходимы для работы калькулятора

---

### 1. ДАННЫЕ КОНКУРЕНТОВ

```javascript
const COMPETITORS = [
    { name: 'Freed.ai', monthly: 99, features: 'Scribe only', patientSide: 'No' },
    { name: 'Suki Assistant', monthly: 399, features: 'Scribe + Voice', patientSide: 'No' },
    { name: 'DeepScribe', monthly: 750, features: 'Premium Scribe + Coding', patientSide: 'No' }
];
```

---

### 2. ФУНКЦИЯ ФОРМАТИРОВАНИЯ ВАЛЮТЫ

```javascript
function formatCurrency(value) {
    return '$' + Math.round(value).toLocaleString();
}
```

**Описание:** Округляет число и добавляет знак доллара и разделители тысяч

---

### 3. ОСНОВНАЯ ФУНКЦИЯ РАСЧЕТА - calculateROI()

**Триггер:** Вызывается при изменении любого input поля (oninput/onchange)

**Шаг 1: Получить значения из полей ввода**
```javascript
const physicians = parseInt(document.getElementById('physicians').value) || 0;
const hourlyRate = parseInt(document.getElementById('hourlyRate').value) || 0;
const hoursSaved = parseFloat(document.getElementById('hoursSaved').value) || 0;
const pricingTier = parseInt(document.getElementById('pricingTier').value) || 249;
const currentCosts = parseInt(document.getElementById('currentCosts').value) || 0;
```

**Шаг 2: Рассчитать метрики**

**Monthly Time Savings:**
```
monthlySavings = physicians × hoursSaved × 4 × hourlyRate
```
(4 = количество недель в месяце)

**Monthly Cost:**
```
monthlyCost = physicians × pricingTier
```

**Net Monthly Savings:**
```
netMonthlySavings = monthlySavings - monthlyCost + currentCosts
```

**Payback Period:**
```
paybackPeriod = monthlyCost / monthlySavings (в месяцах)
```
Если monthlySavings = 0, то paybackPeriod = Infinity (отображать как "Never")

**3-Year ROI:**
```
roi3Year = netMonthlySavings × 36
```

**ROI Percent:**
```
roiPercent = (netMonthlySavings / monthlyCost) × 100
```
Если monthlyCost = 0, то roiPercent = Infinity (отображать как "∞% return")

**Шаг 3: Обновить результаты на странице**
```javascript
document.getElementById('monthlySavings').textContent = formatCurrency(monthlySavings);
document.getElementById('monthlyCost').textContent = formatCurrency(monthlyCost);
document.getElementById('netMonthlySavings').textContent = formatCurrency(netMonthlySavings);
document.getElementById('paybackPeriod').textContent = paybackPeriod === Infinity ? 'Never' : paybackPeriod.toFixed(1);
document.getElementById('roi3Year').textContent = formatCurrency(roi3Year);
document.getElementById('roiPercent').textContent = roiPercent === Infinity ? '(∞% return)' : `(${roiPercent.toFixed(0)}% monthly return)`;
```

**Шаг 4: Обновить таблицы**
```javascript
updateComparisonTable(physicians, pricingTier);
updateBreakdownTable(monthlySavings, monthlyCost, currentCosts, netMonthlySavings);
```

---

### 4. ФУНКЦИЯ ОБНОВЛЕНИЯ ТАБЛИЦЫ СРАВНЕНИЯ - updateComparisonTable()

**Параметры:**
- `physicians` - количество врачей
- `pricingTier` - выбранный тариф Healthy4U

**Логика:**

1. Очистить таблицу (tbody.innerHTML = '')

2. Добавить строку Healthy4U (с подсветкой):
   - Solution: "Healthy4U"
   - Monthly/Physician: formatCurrency(pricingTier)
   - Features: "Scribe + AI Consultant + Patient App"
   - Patient Side: "✓ Yes" (зеленый/оранжевый)
   - Year 1 Total: formatCurrency(pricingTier × physicians × 12)

3. Добавить строки конкурентов (цикл по COMPETITORS):
   Для каждого конкурента:
   - Solution: comp.name
   - Monthly/Physician: formatCurrency(comp.monthly)
   - Features: comp.features
   - Patient Side: comp.patientSide (красный)
   - Year 1 Total: formatCurrency(comp.monthly × physicians × 12)

---

### 5. ФУНКЦИЯ ОБНОВЛЕНИЯ BREAKDOWN ТАБЛИЦЫ - updateBreakdownTable()

**Параметры:**
- `monthlySavings` - экономия времени в месяц
- `monthlyCost` - стоимость Healthy4U в месяц
- `currentCosts` - текущие затраты, которые устраняются
- `netMonthlySavings` - чистая экономия в месяц

**Логика:**

1. Рассчитать годовые значения:
```javascript
const year1Benefits = monthlySavings × 12;
const year1Costs = monthlyCost × 12;
const year1Eliminated = currentCosts × 12;
const year1Net = netMonthlySavings × 12;
```

2. Год 2 и Год 3 - такие же значения (year2Benefits = monthlySavings × 12, и т.д.)

3. Рассчитать 3-year totals:
```javascript
const totalBenefits = year1Benefits + year2Benefits + year3Benefits;
const totalCosts = year1Costs + year2Costs + year3Costs;
const totalEliminated = year1Eliminated + year2Eliminated + year3Eliminated;
const totalNet = year1Net + year2Net + year3Net;
```

4. Создать 4 строки таблицы:

**Строка 1:** Time Savings (Benefits)
- Year 1: formatCurrency(year1Benefits)
- Year 2: formatCurrency(year2Benefits)
- Year 3: formatCurrency(year3Benefits)
- Total: formatCurrency(totalBenefits)

**Строка 2:** Healthy4U Costs
- Year 1: formatCurrency(year1Costs)
- Year 2: formatCurrency(year2Costs)
- Year 3: formatCurrency(year3Costs)
- Total: formatCurrency(totalCosts)

**Строка 3:** Eliminated Costs
- Year 1: formatCurrency(year1Eliminated)
- Year 2: formatCurrency(year2Eliminated)
- Year 3: formatCurrency(year3Eliminated)
- Total: formatCurrency(totalEliminated)

**Строка 4:** Net Savings (выделена жирным шрифтом)
- Year 1: formatCurrency(year1Net)
- Year 2: formatCurrency(year2Net)
- Year 3: formatCurrency(year3Net)
- Total: formatCurrency(totalNet)

---

### 6. ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ

```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Вызвать calculateROI() сразу при загрузке
    calculateROI();

    // Также настроить scroll reveal анимации
});
```

---

## ТЕХНИЧЕСКИЕ ДЕТАЛИ

### Локальные изображения:
- **images/logo.png**: Favicon

### Ссылки:
- Главная страница: index.html
- Кейс-стади: index.html#case-study

### Компоненты:
- Header: загружается через components.js (#header-container)
- Footer: загружается через components.js (#footer-container)

### Input поля - события:
- Все number inputs: `oninput="calculateROI()"`
- Select (pricing tier): `onchange="calculateROI()"`

### Стили:
- Focus на inputs: border оранжевый (#EF6113) с shadow
- Number input arrows: видимые (opacity: 1)

---

## ПРИМЕРЫ РАСЧЕТОВ

### Пример 1 (значения по умолчанию):
**Inputs:**
- physicians = 3
- hourlyRate = 50
- hoursSaved = 4
- pricingTier = 174
- currentCosts = 0

**Расчеты:**
- monthlySavings = 3 × 4 × 4 × 50 = $2,400
- monthlyCost = 3 × 174 = $522
- netMonthlySavings = 2,400 - 522 + 0 = $1,878
- paybackPeriod = 522 / 2,400 = 0.2 месяца
- roi3Year = 1,878 × 36 = $67,608
- roiPercent = (1,878 / 522) × 100 = 360% месячный возврат

---

### Пример 2 (крупная клиника):
**Inputs:**
- physicians = 10
- hourlyRate = 75
- hoursSaved = 5
- pricingTier = 249
- currentCosts = 500

**Расчеты:**
- monthlySavings = 10 × 5 × 4 × 75 = $15,000
- monthlyCost = 10 × 249 = $2,490
- netMonthlySavings = 15,000 - 2,490 + 500 = $13,010
- paybackPeriod = 2,490 / 15,000 = 0.2 месяца
- roi3Year = 13,010 × 36 = $468,360
- roiPercent = (13,010 / 2,490) × 100 = 522% месячный возврат

---

## ВАЖНЫЕ ЗАМЕЧАНИЯ ДЛЯ ИМПЛЕМЕНТАЦИИ

1. **Все расчеты выполняются на клиенте** (JavaScript), нет серверных запросов

2. **Функция calculateROI() должна вызываться:**
   - При изменении любого input
   - При загрузке страницы (DOMContentLoaded)

3. **formatCurrency() округляет значения** - не показывать центы

4. **Payback Period показывается с 1 десятичным знаком** (.toFixed(1))

5. **ROI Percent показывается без десятичных знаков** (.toFixed(0))

6. **Infinity значения обрабатываются специально:**
   - Payback Period = "Never"
   - ROI Percent = "∞% return"

7. **Таблицы перестраиваются полностью** при каждом изменении (innerHTML = '')

8. **Healthy4U строка в comparison table выделена** фоном и имеет зеленую галочку в Patient Side

9. **Последняя строка breakdown table (Net Savings) выделена** жирным и имеет оранжевый border-top
