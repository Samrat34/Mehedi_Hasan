<template>
  <div :class="{ 'dark-theme': isDarkTheme }">
    <nav>
      <div class="logo">MH</div>
      <div class="nav-links" :class="{ 'active': isMenuOpen }">
        <a href="#about" @click="closeMenu">About</a>
        <a href="#skills" @click="closeMenu">Skills</a>
        <a href="#projects" @click="closeMenu">Projects</a>
        <a href="#contact" @click="closeMenu">Contact</a>
      </div>
      <button class="mobile-menu-btn" @click="toggleMenu">
        <font-awesome-icon :icon="['fas', isMenuOpen ? 'times' : 'bars']" />
      </button>
    </nav>

    <section id="hero" class="hero">
      <div class="hero-content" data-aos="fade-up">
        <h1>Md. Mehedi Hasan</h1>
        <b> <vue-writer :array="['Fullstack Web Developer', 'Laravel Expert', 'Vue.js Developer']"
            style="color: white;" /></b>
        <div class="social-links">
          <a href="#" class="github" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a href="#" class="linkedin" target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
          <a href="#" class="facebook" target="_blank">
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
          <a href="#" class="discord" target="_blank">
            <font-awesome-icon :icon="['fab', 'discord']" />
          </a>
        </div>
      </div>
    </section>


    <section id="about" class="about" data-aos="fade-up">
      <h2>About Me</h2>
      <div class="about-content">
        <div class="about-image">
          <img src="/src/assets/mehedi.jpg" alt="Profile">
        </div>
        <div class="about-text">
          <h3>Hello! I'm Mehedi </h3>
          <p>
            I am a passionate <strong>Fullstack Web Developer</strong> with a strong foundation in
            <strong>Laravel</strong>, <strong>Vue.js</strong>, and <strong>Bootstrap</strong>. With a deep love for
            crafting clean and efficient code, I strive to create web applications that not only look beautiful but also
            solve real-world challenges.
          </p>
          <p>
            I specialize in building seamless, dynamic websites and web applications that deliver excellent user
            experiences. From backend architecture to frontend interfaces, I ensure that every piece of the puzzle works
            harmoniously to bring your vision to life.
          </p>

          <div class="about-stats">
            <div class="stat">
              <h4>2+</h4>
              <p>Years Experience</p>
            </div>
            <div class="stat">
              <h4>5+</h4>
              <p>Projects Completed</p>
            </div>
            <div class="stat">
              <h4>3+</h4>
              <p>Happy Clients</p>
            </div>
          </div>
          <br>
          <p>
            Let's build something great together!
          </p>
        </div>
      </div>
    </section>

    <section id="skills" class="skills" data-aos="fade-up">
      <h2>My Skills</h2>
      <div class="skills-grid">
        <!-- Frontend Skills -->
        <div class="skill-card" data-aos="fade-up" data-aos-delay="100" style="--skill-color: #42b883">
          <font-awesome-icon :icon="['fab', 'vuejs']" class="skill-icon" />
          <h3>Frontend Development</h3>
          <p>Vue.js, React, Bootstrap, HTML5, CSS3, JavaScript, TypeScript, SASS, Tailwind CSS</p>

        </div>

        <!-- Backend Skills -->
        <div class="skill-card" data-aos="fade-up" data-aos-delay="200" style="--skill-color: #ff7e67">
          <font-awesome-icon :icon="['fas', 'gears']" class="skill-icon" />
          <h3>Backend Development</h3>
          <p>Laravel, PHP, Node.js, Express, REST APIs, GraphQL</p>

        </div>

        <!-- Database Skills -->
        <div class="skill-card" data-aos="fade-up" data-aos-delay="300" style="--skill-color: #00a8cc">
          <font-awesome-icon :icon="['fas', 'database']" class="skill-icon" />
          <h3>Database & Storage</h3>
          <p>MySQL, PostgreSQL, MongoDB, Redis, Firebase, ORMs, Data Modeling</p>

        </div>

        <!-- Design Skills -->
        <div class="skill-card" data-aos="fade-up" data-aos-delay="400" style="--skill-color: #ffd93d">
          <font-awesome-icon :icon="['fas', 'pencil-ruler']" class="skill-icon" />
          <h3>UI/UX Design</h3>
          <p>Responsive Design, Adobe XD, Figma, Sketch, User Flows, Prototyping</p>

        </div>

        <!-- Programming Languages -->
        <div class="skill-card" data-aos="fade-up" data-aos-delay="500" style="--skill-color: #a66cff">
          <font-awesome-icon :icon="['fas', 'laptop-code']" class="skill-icon" />
          <h3>Programming Languages</h3>
          <p>Python, C#, Java, JavaScript, TypeScript, PHP, Bash Scripting</p>

        </div>

        <!-- DevOps & Tools -->
        <div class="skill-card" data-aos="fade-up" data-aos-delay="600" style="--skill-color: #9c1de7">
          <font-awesome-icon :icon="['fas', 'cloud']" class="skill-icon" />
          <h3>DevOps & Tools</h3>
          <p>Git, Docker, CI/CD, AWS, Azure, Testing (Jest, PHPUnit), Webpack</p>

        </div>

        <!-- Other Skills -->
        <div class="skill-card" data-aos="fade-up" data-aos-delay="700" style="--skill-color: #f39189">
          <font-awesome-icon :icon="['fas', 'tools']" class="skill-icon" />
          <h3>Other Skills</h3>
          <p>Adobe Photoshop, Illustrator, MS Office, Technical Writing, Agile Methodologies</p>
        </div>
      </div>
    </section>


    <section id="projects" class="projects" data-aos="fade-up">
      <h2>Recent Projects</h2>
      <div class="project-grid">
        <div class="project-card" v-for="i in 3" :key="i" data-aos="fade-up" :data-aos-delay="i * 100">
          <img :src="'https://picsum.photos/400/250?random=' + i" alt="Project Image">
          <h3>Project Title {{ i }}</h3>
          <p>A brief description of the project and the technologies used in its development.</p>
          <div class="project-links">
            <a href="#" class="btn">View Demo</a>
            <a href="#" class="btn">Source Code</a>
          </div>
        </div>
      </div>
    </section>

    <section id="gallery" class="gallery" data-aos="fade-up">
      <h2>My Gallery</h2>
      <div class="gallery-grid">
        <div class="gallery-item" v-for="i in 6" :key="i" data-aos="fade-up" :data-aos-delay="i * 100">
          <img :src="'https://picsum.photos/400/300?random=' + (i + 10)" alt="Gallery Image">
          <div class="gallery-overlay">
            <h3>Collection {{ i }}</h3>
            <p>Beautiful moments captured</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="contact" data-aos="fade-up">
      <h2>Get In Touch</h2>
      <div class="contact-container">
        <div class="contact-info">
          <h3>Let's Talk</h3>
          <p>Feel free to reach out to me through any of these channels:</p>
          <div class="contact-methods">
            <div class="contact-method">
              <font-awesome-icon :icon="['fas', 'phone']" />
              <div>
                <h4>Phone</h4>
                <p>+1 (234) 567-8900</p>
              </div>
            </div>
            <div class="contact-method">
              <font-awesome-icon :icon="['fas', 'envelope']" />
              <div>
                <h4>Email</h4>
                <p>hello@example.com</p>
              </div>
            </div>
            <div class="contact-method">
              <font-awesome-icon :icon="['fas', 'location-dot']" />
              <div>
                <h4>Location</h4>
                <p>New York, USA</p>
              </div>
            </div>
          </div>
        </div>
        <form @submit.prevent="submitForm" class="contact-form">
          <input type="text" placeholder="Your Name" required>
          <input type="email" placeholder="Your Email" required>
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" class="btn">Send Message</button>
        </form>
      </div>
    </section>

    <footer>
      <div class="footer-content">
        <div class="footer-section">
          <h3>Md Mehedi Hasan</h3>
          <p>Fullstack Web Developer</p>
        </div>
        <div class="footer-section">
          <h3>Quick Links</h3>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div class="footer-section">
          <h3>Connect</h3>
          <div class="social-links">
            <a href="#"><font-awesome-icon :icon="['fab', 'github']" /></a>
            <a href="#"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
            <a href="#"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
            <a href="#"><font-awesome-icon :icon="['fab', 'discord']" /></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Md Mehedi Hasan. All rights reserved.</p>
      </div>
    </footer>

    <button class="theme-toggle" @click="toggleTheme">
      <font-awesome-icon :icon="['fas', isDarkTheme ? 'sun' : 'moon']" />
    </button>

    <button class="scroll-top" @click="scrollToTop" v-show="showScrollTop">
      <font-awesome-icon :icon="['fas', 'arrow-up']" />
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import VueWriter from 'vue-writer'

const isDarkTheme = ref(false)
const showScrollTop = ref(false)
const isMenuOpen = ref(false)

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const submitForm = () => {
  // Handle form submission
  console.log('Form submitted')
}
</script>