document.addEventListener('DOMContentLoaded', () => {
    // Definición de las preguntas en un array de objetos
    const questions = [
        {
            pregunta: "¿Cuál es el resultado de la siguiente operación con números enteros: (−5)×(3−8)+(−2)×4?",
            alternativas: ["-5", "17", "10", "-15"],
            correcta: "17",
            eje: "Números",
            unidad: "Conjunto de los números enteros y racionales",
            dificultad: 2
        },
        {
            pregunta: "Si un artículo cuesta $25.000 y tiene un descuento del 20%, ¿cuál es el precio final del artículo?",
            alternativas: ["$20.000", "$22.500", "$18.000", "$24.500"],
            correcta: "$20.000",
            eje: "Números",
            unidad: "Porcentaje",
            dificultad: 3
        },
        {
            pregunta: "Un rectángulo tiene un perímetro de 36 cm. Si el largo es el doble del ancho, ¿cuáles son las dimensiones del rectángulo?",
            alternativas: ["Largo = 12 cm, Ancho = 6 cm", "Largo = 18 cm, Ancho = 9 cm", "Largo = 10 cm, Ancho = 8 cm", "Largo = 14 cm, Ancho = 4 cm"],
            correcta: "Largo = 12 cm, Ancho = 6 cm",
            eje: "Geometría",
            unidad: "Figuras geométricas",
            dificultad: 4
        },
        {
            pregunta: "Dada la expresión algebraica 3(x+2)−2(x−1), ¿cuál es su forma simplificada?",
            alternativas: ["x+8", "5x+4", "x+4", "5x+8"],
            correcta: "x+8",
            eje: "Álgebra y Funciones",
            unidad: "Expresiones algebraicas",
            dificultad: 3
        },
        {
            pregunta: "Un automóvil recorre 180 km en 3 horas. Si mantiene la misma velocidad promedio, ¿cuántos kilómetros recorrerá en 5 horas?",
            alternativas: ["280 km", "300 km", "320 km", "360 km"],
            correcta: "300 km",
            eje: "Álgebra y Funciones",
            unidad: "Proporcionalidad",
            dificultad: 2
        },
        {
            pregunta: "¿Cuál de las siguientes opciones representa correctamente el conjunto de los números racionales?",
            alternativas: [
                "{x ∣ x ∈ Z y x > 0}",
                "{x ∣ x = a/b, donde a, b ∈ Z y b ≠ 0}",
                "{x ∣ x = √n, donde n es un número natural}",
                "{x ∣ x = 2k, donde k ∈ Z}"
            ],
            correcta: "{x ∣ x = a/b, donde a, b ∈ Z y b ≠ 0}",
            eje: "Números",
            unidad: "Conjunto de los números enteros y racionales",
            dificultad: 5
        },
        {
            pregunta: "Si un artículo se compra por $80 y se vende por $100, ¿cuál es el porcentaje de ganancia sobre el precio de venta?",
            alternativas: ["20%", "25%", "16.67%", "33.33%"],
            correcta: "20%", // La ganancia es $20. Sobre el precio de venta ($100), es 20/100 = 20%.
            eje: "Números",
            unidad: "Porcentaje",
            dificultad: 4
        },
        {
            pregunta: "Un triángulo isósceles tiene dos lados de igual longitud. Si el perímetro de un triángulo isósceles es 30 cm y uno de los lados iguales mide 12 cm, ¿cuánto mide el tercer lado?",
            alternativas: ["6 cm", "12 cm", "18 cm", "30 cm"],
            correcta: "6 cm",
            eje: "Geometría",
            unidad: "Figuras geométricas",
            dificultad: 3
        },
        {
            pregunta: "¿Cuál es el valor de x en la ecuación lineal 5x−7 = 3x+9?",
            alternativas: ["x=2", "x=4", "x=8", "x=16"],
            correcta: "x=8",
            eje: "Álgebra y Funciones",
            unidad: "Ecuaciones e inecuaciones de primer grado",
            dificultad: 2
        },
        {
            pregunta: "Un plano cartesiano muestra los puntos A(2, 3) y B(5, 7). ¿Cuál es la distancia entre los puntos A y B?",
            alternativas: ["√5", "√13", "5", "√34"],
            correcta: "5", // d = sqrt((5-2)^2 + (7-3)^2) = sqrt(3^2 + 4^2) = sqrt(9+16) = sqrt(25) = 5
            eje: "Geometría",
            unidad: "Transformaciones isométricas",
            dificultad: 6
        },
        {
            pregunta: "¿Cuál es el resultado de simplificar la expresión (x²−4)/(x−2), asumiendo que x≠2?",
            alternativas: ["x+2", "x−2", "x", "2"],
            correcta: "x+2",
            eje: "Álgebra y Funciones",
            unidad: "Expresiones algebraicas",
            dificultad: 4
        },
        {
            pregunta: "En una bolsa hay 5 bolitas rojas y 3 bolitas azules. Si se extrae una bolita al azar, ¿cuál es la probabilidad de que sea azul?",
            alternativas: ["3/8", "5/8", "3/5", "5/3"],
            correcta: "3/8",
            eje: "Probabilidad y Estadística",
            unidad: "Reglas de las probabilidades",
            dificultad: 2
        },
        {
            pregunta: "Un cuadrado tiene un área de 64 cm². ¿Cuál es la longitud de su diagonal?",
            alternativas: ["8 cm", "8√2 cm", "16 cm", "16√2 cm"],
            correcta: "8√2 cm",
            eje: "Geometría",
            unidad: "Figuras geométricas",
            dificultad: 6
        },
        {
            pregunta: "¿Cuál es el valor de a si la función lineal f(x)=ax−3 pasa por el punto (2, 5)?",
            alternativas: ["a=1", "a=2", "a=4", "a=8"],
            correcta: "a=4",
            eje: "Álgebra y Funciones",
            unidad: "Función lineal y afín",
            dificultad: 4
        },
        {
            pregunta: "Se tiene una encuesta sobre las preferencias musicales de 50 personas. Los resultados son: Rock (20), Pop (15), Clásica (10), Otro (5). ¿Qué porcentaje de las personas prefieren Rock?",
            alternativas: ["10%", "20%", "40%", "50%"],
            correcta: "40%",
            eje: "Probabilidad y Estadística",
            unidad: "Representación de datos",
            dificultad: 3
        },
        {
            pregunta: "Si el promedio de 5 números es 12, y cuatro de ellos son 10, 15, 8 y 14, ¿cuál es el quinto número?",
            alternativas: ["13", "14", "15", "16"],
            correcta: "13", // (10+15+8+14+x)/5 = 12 => 47+x = 60 => x = 13
            eje: "Probabilidad y Estadística",
            unidad: "Medidas de posición",
            dificultad: 4
        },
        {
            pregunta: "¿Cuál es el término general de la sucesión 3, 7, 11, 15, …?",
            alternativas: ["aₙ=4n−1", "aₙ=4n+3", "aₙ=3n+4", "aₙ=4n"],
            correcta: "aₙ=4n−1",
            eje: "Álgebra y Funciones",
            unidad: "Expresiones algebraicas",
            dificultad: 5
        },
        {
            pregunta: "En un juego de azar, la probabilidad de ganar es de 0.3. Si se juega dos veces, ¿cuál es la probabilidad de ganar ambas veces?",
            alternativas: ["0.09", "0.49", "0.21", "0.6"],
            correcta: "0.09",
            eje: "Probabilidad y Estadística",
            unidad: "Reglas de las probabilidades",
            dificultad: 6
        },
        {
            pregunta: "¿Cuál es el vértice de la parábola representada por la función f(x)=x²−4x+3?",
            alternativas: ["(2, -1)", "(-2, 15)", "(1, 0)", "(3, 0)"],
            correcta: "(2, -1)",
            eje: "Álgebra y Funciones",
            unidad: "Función cuadrática",
            dificultad: 7
        },
        {
            pregunta: "Dos eventos A y B son mutuamente excluyentes. Si P(A)=0.4 y P(B)=0.3, ¿cuál es la probabilidad de que ocurra A o B?",
            alternativas: ["0.12", "0.7", "1", "0.012"],
            correcta: "0.7",
            eje: "Probabilidad y Estadística",
            unidad: "Reglas de las probabilidades",
            dificultad: 5
        }
    ];

    // NOTA: Corregí las respuestas correctas basándome en los cálculos matemáticos, ya que la lista que proporcionaste tenía algunos errores. Por ejemplo, en la pregunta 1, la respuesta correcta es 17, no B. Y en la 10 es 5, no D.

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
        
        nextBtn.style.display = 'none'; // Ocultar botón 'Siguiente' hasta que se responda
    }

    function handleOptionClick(event) {
        const selectedButton = event.target;
        const selectedAnswer = selectedButton.textContent;
        const currentQuestion = questions[currentQuestionIndex];
        const correctAnswer = currentQuestion.correcta;

        const feedbackEl = document.getElementById('feedback');
        const optionButtons = document.querySelectorAll('.option-btn');

        // Deshabilitar todos los botones
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
            // Resaltar la respuesta correcta
            optionButtons.forEach(btn => {
                if (btn.textContent === correctAnswer) {
                    btn.classList.add('correct');
                }
            });
        }
        
        feedbackEl.style.display = 'block';
        nextBtn.style.display = 'inline-block'; // Mostrar botón 'Siguiente'

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