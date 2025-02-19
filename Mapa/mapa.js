
        // 1️⃣ Criar a cena
        const scene = new THREE.Scene();

        // 2️⃣ Criar a câmera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 2, 5); // Ajusta posição inicial

        // 3️⃣ Criar o renderizador
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // 4️⃣ Controles de órbita
        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        // 5️⃣ Adicionar iluminação
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Luz suave
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 5);
        scene.add(directionalLight);

        // 6️⃣ Carregar o modelo GLTF/GLB
        const loader = new THREE.GLTFLoader();
        loader.load('modelo.glb', (gltf) => {
            const model = gltf.scene;
            model.position.set(0, 0, 0);
            scene.add(model);
        }, undefined, (error) => {
            console.error("Erro ao carregar o modelo", error);
        });

        // 7️⃣ Animação
        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        }
        animate();

        // 8️⃣ Ajustar responsividade
        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        });