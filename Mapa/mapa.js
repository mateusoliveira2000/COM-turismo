let map;
let marker;
let currentButton = null; // Para rastrear o botão ativo

// Coordenadas das cidades
const cities = {
    busan: { lat: 35.1796, lng: 129.0756, name: "Busan, Coreia do Sul" },
    dublin: { lat: 53.3498, lng: -6.2603, name: "Dublin, Irlanda" },
    roma: { lat: 41.9028, lng: 12.4964, name: "Roma, Itália" },
    paris: { lat: 48.8566, lng: 2.3522, name: "Paris, França" },
    toronto: { lat: 43.65107, lng: -79.347015, name: "Toronto, Canadá" },
    grecia: { lat: 37.9838, lng: 23.7275, name: "Atenas, Grécia" }
};

// Inicializar o mapa
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: cities.paris, // Começa em Paris
        mapTypeId: 'roadmap'
    });

    marker = new google.maps.Marker({
        position: cities.paris,
        map: map,
        title: "Paris, França"
    });
}

// Função para mover o mapa com animação
function goToCity(cityKey, button) {
    if (!cities[cityKey]) return;

    const city = cities[cityKey];

    // Alterar cor do botão ativo
    if (currentButton) currentButton.classList.remove("active");
    button.classList.add("active");
    currentButton = button;

    // Criar uma animação de deslocamento pelo mapa
    const steps = 50; // Quantidade de passos na animação
    let step = 0;
    const startLat = map.getCenter().lat();
    const startLng = map.getCenter().lng();

    function animateMovement() {
        if (step >= steps) {
            map.setCenter(city); // Garante que o mapa termina na posição exata
            map.setZoom(10);
            marker.setPosition(city);
            marker.setTitle(city.name);
            return;
        }

        // Calcular a posição intermediária
        const lat = startLat + (city.lat - startLat) * (step / steps);
        const lng = startLng + (city.lng - startLng) * (step / steps);

        map.panTo({ lat, lng });
        step++;
        setTimeout(animateMovement, 30); // Controla a velocidade da transição
    }

    animateMovement();
}