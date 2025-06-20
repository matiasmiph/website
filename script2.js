document.addEventListener('DOMContentLoaded', () => {
    // Definición de las preguntas de Nivel Avanzado
    const questions = [
        {
            pregunta: "Un tanque de agua se llena a una tasa constante. Si el tanque está lleno hasta 2/3 de su capacidad en 2 horas, ¿cuánto tiempo adicional se necesitará para llenarlo completamente?",
            alternativas: ["1 hora", "1.5 horas", "2 horas", "0.5 horas"],
            correcta: "1 hora", // Si 2/3 se llenan en 2h, la tasa es 1/3 por hora. Falta 1/3, que tomará 1 hora.
            eje: "Números",
            unidad: "Conjunto de los números enteros y racionales",
            dificultad: 8
        },
        {
            pregunta: "La función f(x) = 3 ⋅ 2ˣ representa el crecimiento de una población. Si la población inicial es 3, ¿cuántos individuos habrá después de 5 unidades de tiempo?",
            alternativas: ["48", "96", "192", "768"],
            correcta: "96", // f(5) = 3 * 2^5 = 3 * 32 = 96
            eje: "Álgebra y Funciones",
            unidad: "Función lineal y afín",
            dificultad: 8
        },
        {
            pregunta: "Se considera un triángulo con vértices en los puntos A(1, 2), B(4, 6) y C(7, 2). ¿Cuál es el área de este triángulo?",
            alternativas: ["12 unidades²", "9 unidades²", "18 unidades²", "24 unidades²"],
            correcta: "12 unidades²", // Base AC = 7-1=6. Altura desde B = 6-2=4. Área = (6*4)/2 = 12.
            eje: "Geometría",
            unidad: "Transformaciones isométricas",
            dificultad: 9
        },
        {
            pregunta: "Si la suma de tres números enteros consecutivos es 30, ¿cuál es el producto de estos números?",
            alternativas: ["960", "990", "1020", "1050"],
            correcta: "990", // Los números son 9, 10, 11. Su producto es 9*10*11 = 990.
            eje: "Números",
            unidad: "Conjunto de los números enteros y racionales",
            dificultad: 8
        },
        {
            pregunta: "Una tienda ofrece un descuento del 15% sobre el precio de un artículo. Si el precio con descuento es $42.500, ¿cuál era el precio original del artículo?",
            alternativas: ["$48.875", "$50.000", "$52.250", "$55.000"],
            correcta: "$50.000", // PrecioOriginal * 0.85 = 42500. PrecioOriginal = 42500 / 0.85 = 50000.
            eje: "Números",
            unidad: "Porcentaje",
            dificultad: 7
        },
        {
            pregunta: "¿Cuál es la pendiente de la recta que pasa por los puntos (-2, 5) y (3, -5)?",
            alternativas: ["-2", "2", "-1/2", "1/2"],
            correcta: "-2", // m = (-5 - 5) / (3 - (-2)) = -10 / 5 = -2.
            eje: "Álgebra y Funciones",
            unidad: "Función lineal y afín",
            dificultad: 7
        },
        {
            pregunta: "Se tiene un dado justo de seis caras y una moneda. ¿Cuál es la probabilidad de obtener un número par en el dado y cara en la moneda?",
            alternativas: ["1/12", "1/6", "1/4", "1/2"],
            correcta: "1/4", // P(par) = 3/6 = 1/2. P(cara) = 1/2. P(ambos) = (1/2)*(1/2) = 1/4.
            eje: "Probabilidad y Estadística",
            unidad: "Reglas de las probabilidades",
            dificultad: 8
        },
        {
            pregunta: "La gráfica de la función cuadrática f(x) = −2x² + 8x − 5 tiene su vértice en:",
            alternativas: ["(2, 3)", "(-2, -21)", "(2, -13)", "(2, -5)"],
            correcta: "(2, 3)", // Vértice x = -b/2a = -8/(2*-2) = 2. y = f(2) = -2(4)+8(2)-5 = -8+16-5 = 3.
            eje: "Álgebra y Funciones",
            unidad: "Función cuadrática",
            dificultad: 9
        },
        {
            pregunta: "Un rectángulo tiene un largo que es 3 unidades mayor que su ancho. Si el área es 70 u², ¿cuál es el perímetro?",
            alternativas: ["30 unidades", "34 unidades", "38 unidades", "42 unidades"],
            correcta: "34 unidades", // ancho=7, largo=10. Perímetro = 2(7+10) = 34.
            eje: "Geometría",
            unidad: "Figuras geométricas",
            dificultad: 9
        },
        {
            pregunta: "Si la media de un conjunto de datos es 15 y la suma de los datos es 120, ¿cuántos datos hay en el conjunto?",
            alternativas: ["7", "8", "9", "10"],
            correcta: "8", // Cantidad = Suma / Media = 120 / 15 = 8.
            eje: "Probabilidad y Estadística",
            unidad: "Medidas de posición",
            dificultad: 7
        },
        {
            pregunta: "¿Cuál es la solución del sistema de ecuaciones: 2x+y=7 y x−y=2?",
            alternativas: ["x=3, y=1", "x=3, y=−1", "x=2, y=3", "x=1, y=3"],
            correcta: "x=3, y=1", // Sumando las ecuaciones: 3x=9 -> x=3. Reemplazando: 3-y=2 -> y=1.
            eje: "Álgebra y Funciones",
            unidad: "Sistemas de ecuaciones lineales (2x2)",
            dificultad: 8
        },
        {
            pregunta: "Se lanzan dos dados justos. ¿Cuál es la probabilidad de obtener una suma de 9?",
            alternativas: ["1/12", "1/9", "1/6", "1/4"],
            correcta: "1/9", // Casos favorables: (3,6), (4,5), (5,4), (6,3) -> 4 casos. Total: 36. P=4/36=1/9.
            eje: "Probabilidad y Estadística",
            unidad: "Reglas de las probabilidades",
            dificultad: 8
        },
        {
            pregunta: "Un círculo tiene un área de 36π. ¿Cuál es su perímetro (circunferencia)?",
            alternativas: ["6π", "12π", "18π", "36π"],
            correcta: "12π", // Área=πr²=36π -> r=6. Perímetro=2πr = 2π(6) = 12π.
            eje: "Geometría",
            unidad: "Figuras geométricas",
            dificultad: 7
        },
        {
            pregunta: "La expresión ³√(27a⁶b⁹) es igual a:",
            alternativas: ["3a²b³", "9a²b³", "3a³b⁶", "27a²b³"],
            correcta: "3a²b³", // Raíz cúbica de 27 es 3, de a⁶ es a², de b⁹ es b³.
            eje: "Números",
            unidad: "Potencias y raíces enésimas",
            dificultad: 9
        },
        {
            pregunta: "¿Cuál es el conjunto de soluciones de la inecuación 3x−5 > 4x−1?",
            alternativas: ["x < −4", "x > −4", "x < 4", "x > 4"],
            correcta: "x < −4", // -5+1 > 4x-3x -> -4 > x.
            eje: "Álgebra y Funciones",
            unidad: "Ecuaciones e inecuaciones de primer grado",
            dificultad: 8
        },
        {
            pregunta: "En una muestra de 200 estudiantes, el 30% prefiere azul y el 20% rojo. ¿Cuántos prefieren otro color?",
            alternativas: ["50", "60", "100", "140"],
            correcta: "100", // 50% prefiere azul o rojo. El otro 50% es 100 estudiantes.
            eje: "Probabilidad y Estadística",
            unidad: "Representación de datos",
            dificultad: 7
        },
        {
            pregunta: "Una caja cúbica tiene un volumen de 125 cm³. ¿Cuál es el área total de la superficie de la caja?",
            alternativas: ["25 cm²", "75 cm²", "150 cm²", "375 cm²"],
            correcta: "150 cm²", // Lado=5cm. Área cara=25cm². Área total=6*25=150cm².
            eje: "Geometría",
            unidad: "Cuerpos geométricos",
            dificultad: 9
        },
        {
            pregunta: "Si se aplica una traslación al punto (3, 4) con el vector (-1, 2), ¿cuáles son las coordenadas del nuevo punto?",
            alternativas: ["(4, 6)", "(2, 2)", "(2, 6)", "(4, 2)"],
            correcta: "(2, 6)", // (3-1, 4+2) = (2, 6).
            eje: "Geometría",
            unidad: "Transformaciones isométricas",
            dificultad: 7
        },
        {
            pregunta: "¿Cuál es el valor de x en la ecuación 2ˣ⁺¹ = 32?",
            alternativas: ["4", "5", "6", "7"],
            correcta: "4", // 2^(x+1) = 2^5 -> x+1=5 -> x=4.
            eje: "Números",
            unidad: "Potencias y raíces enésimas",
            dificultad: 8
        },
        {
            pregunta: "En un grupo de 100 personas, 60 hablan español, 40 inglés y 20 ambos. ¿Cuántas no hablan ninguno?",
            alternativas: ["20", "30", "40", "60"],
            correcta: "20", // Total que habla al menos uno = 60+40-20=80. No hablan ninguno = 100-80=20.
            eje: "Probabilidad y Estadística",
            unidad: "Reglas de las probabilidades",
            dificultad: 10
        }
    ];

    // --- EL RESTO DEL CÓDIGO ES IDÉNTICO AL ANTERIOR ---
    
    const questionCard = document.getElementById('question-card');
    const resultsCard = document.getElementById('results-card');
    const nextBtn = document.getElementById('next-btn');

    let currentQuestionIndex = 0;
    let score = 0;

    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionCard.innerHTML = `
            <div id="question-header">
                <span id="question-counter">Pregunta ${currentQuestionIndex + 1} de ${questions.length}</span>
                <span id="difficulty">Dificultad: ${currentQuestion.dificultad}</span>
            </div>
            <p id="question-text">${currentQuestion.pregunta}</p>
            <div id="options-container">
                ${currentQuestion.alternativas.map(alt => `
                    <button class="option-btn">${alt}</button>
                `).join('')}
            </div>
            <div id="feedback"></div>
            <div id="info-container">
                <strong>Eje:</strong> ${currentQuestion.eje} <br>
                <strong>Unidad:</strong> ${currentQuestion.unidad}
            </div>
        `;

        document.querySelectorAll('.option-btn').forEach(button => {
            button.addEventListener('click', handleOptionClick);
        });
        
        nextBtn.style.display = 'none';
    }

    function handleOptionClick(event) {
        const selectedButton = event.target;
        const selectedAnswer = selectedButton.textContent;
        const currentQuestion = questions[currentQuestionIndex];
        const correctAnswer = currentQuestion.correcta;

        const feedbackEl = document.getElementById('feedback');
        const optionButtons = document.querySelectorAll('.option-btn');

        optionButtons.forEach(btn => btn.disabled = true);
        
        if (selectedAnswer === correctAnswer) {
            score++;
            selectedButton.classList.add('correct');
            feedbackEl.textContent = "¡Respuesta Correcta!";
            feedbackEl.className = 'feedback-correct';
        } else {
            selectedButton.classList.add('incorrect');
            feedbackEl.textContent = `Incorrecto. La respuesta correcta es: ${correctAnswer}`;
            feedbackEl.className = 'feedback-incorrect';
            optionButtons.forEach(btn => {
                if (btn.textContent === correctAnswer) {
                    btn.classList.add('correct');
                }
            });
        }
        
        feedbackEl.style.display = 'block';
        nextBtn.style.display = 'inline-block';

        if (currentQuestionIndex === questions.length - 1) {
            nextBtn.textContent = 'Ver Resultados';
        }
    }

    function showNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        questionCard.classList.add('hidden');
        document.getElementById('navigation').classList.add('hidden');
        resultsCard.classList.remove('hidden');

        const percentage = ((score / questions.length) * 100).toFixed(1);

        resultsCard.innerHTML = `
            <h2>¡Cuestionario completado!</h2>
            <p id="score">Obtuviste <strong>${score}</strong> de <strong>${questions.length}</strong> respuestas correctas (${percentage}%).</p>
            <button id="restart-btn">Intentar de Nuevo</button>
        `;

        document.getElementById('restart-btn').addEventListener('click', () => {
            currentQuestionIndex = 0;
            score = 0;
            resultsCard.classList.add('hidden');
            questionCard.classList.remove('hidden');
            document.getElementById('navigation').classList.remove('hidden');
            nextBtn.textContent = 'Siguiente Pregunta';
            showQuestion();
        });
    }
    
    nextBtn.addEventListener('click', showNextQuestion);

    // Iniciar el cuestionario
    showQuestion();
});