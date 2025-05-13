<template>
  <div :class="{ 'dark-theme': isDarkTheme }">
    <nav>
      <div class="logo">MH</div>
      <div class="nav-links" :class="{ 'active': isMenuOpen }">
        <a href="#about" @click="closeMenu">About</a>
        <a href="#skills" @click="closeMenu">Skills</a>
        <a href="#projects" @click="closeMenu">Projects</a>
        <a href="#gallery" @click="closeMenu">Gallery</a>
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
        <!-- Project 1: Primeasia University -->
        <div class="project-card" data-aos="fade-up" data-aos-delay="100">
          <img src="https://new.primeasia.edu.bd/assets/images/logo.png" alt="Primeasia University Website"
            onerror="this.src='https://placehold.co/400x250?text=Primeasia+University'">
          <h3>Primeasia University Website</h3>
          <p>
            A comprehensive university website with dynamic content management, student portals, and admin dashboards.
            <strong>As a Fullstack Developer</strong>, I implemented:
          </p>
          <ul class="project-tech-list">
            <li>Laravel backend with custom CMS for news/events</li>
            <li>Bootstrap 5 responsive frontend</li>
            <li>MySQL database with Eloquent ORM</li>
            <li>User authentication for students/faculty</li>
            <li>API integration for payment processing</li>
          </ul>
          <div class="project-links">
            <a href="https://new.primeasia.edu.bd/" target="_blank" class="btn">Live Site</a>
            <a href="#" class="btn">Case Study</a>
          </div>
        </div>

        <!-- Project 2: RGB Academy -->
        <div class="project-card" data-aos="fade-up" data-aos-delay="200">
          <img src="https://rgbacademy.de/assets/images/logo.png" alt="RGB Academy Website"
            onerror="this.src='https://placehold.co/400x250?text=RGB+Academy'">
          <h3>RGB Academy (Germany)</h3>
          <p>
            An education platform offering course registration, payment processing, and student management.
            <strong>Key contributions</strong> included:
          </p>
          <ul class="project-tech-list">
            <li>Laravel-based multi-role system (Admin/Instructor/Student)</li>
            <li>Bootstrap UI with custom theming</li>
            <li>Stripe/PayPal payment gateway integration</li>
            <li>Automated email notifications</li>
            <li>German/English multilingual support</li>
          </ul>
          <div class="project-links">
            <a href="https://rgbacademy.de/" target="_blank" class="btn">Live Site</a>
            <a href="#" class="btn">Case Study</a>
          </div>
        </div>

        <!-- Project 3: Placeholder -->
        <div class="project-card" data-aos="fade-up" data-aos-delay="300">
          <img src="https://placehold.co/400x250?text=E-Commerce+Project" alt="E-Commerce Platform">
          <h3>E-Commerce Platform</h3>
          <p>
            A full-featured online store with product management, cart system, and order processing.
            Built with Vue.js + Laravel.
          </p>
          <ul class="project-tech-list">
            <li>Vue.js frontend with Vuex state management</li>
            <li>Laravel REST API backend</li>
            <li>JWT authentication</li>
            <li>Product search/filter functionality</li>
          </ul>
          <div class="project-links">
            <a href="#" class="btn">View Demo</a>
            <a href="#" class="btn">Case Study</a>
          </div>
        </div>
      </div>
    </section>

    <section id="gallery" class="gallery" data-aos="fade-up">
      <h2>Fun Gallery</h2>

      <!-- Gallery Grid -->
      <div class="gallery-grid">
        <div class="gallery-item" v-for="(item, index) in visibleItems" :key="currentPage * itemsPerPage + index"
          data-aos="fade-up" :data-aos-delay="index * 100">
          <img :src="'https://picsum.photos/400/300?random=' + (currentPage * itemsPerPage + index + 1)"
            :alt="'Gallery Image ' + (currentPage * itemsPerPage + index + 1)">
          <div class="gallery-overlay">
            <h3>Collection {{ currentPage * itemsPerPage + index + 1 }}</h3>
            <p>Beautiful moments captured</p>
          </div>
        </div>
      </div>

      <!-- Pagination Controls -->
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 0">
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </button>

        <div class="page-numbers">
          <button v-for="page in totalPages" :key="page" @click="currentPage = page - 1"
            :class="{ active: currentPage === page - 1 }">
            {{ page }}
          </button>
        </div>

        <button @click="nextPage" :disabled="currentPage === totalPages - 1">
          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </button>
      </div>
    </section>

    <section id="contact" class="contact" data-aos="fade-up">
      <h2>Get In Touch</h2>
      <div class="contact-container">
        <!-- Left Column: Contact Form -->
        <form id="contactForm" class="contact-form" method="POST" action="#">
          <div class="form-group">
            <input type="text" name="name" placeholder="Your Name" required>
          </div>
          <div class="form-group">
            <input type="email" name="email" placeholder="Your Email" required>
          </div>
          <div class="form-group">
            <textarea name="message" placeholder="Your Message" required></textarea>
          </div>
          <!-- <button type="submit" class="btn">Send Message <font-awesome-icon :icon="['fas', 'paper-plane']" /></button> -->
          <h4 style="color: red;">Under Construction, We will get soon.</h4>
          <p id="formResponse" class="form-response"></p>
        </form>

        <!-- Right Column: Contact Info -->
        <div class="contact-info">
          <h3>Contact Information</h3>
          <p>Feel free to reach out for collaborations or just to say hello!</p>

          <div class="contact-methods">
            <div class="contact-method">
              <div class="contact-icon">
                <font-awesome-icon :icon="['fas', 'user-astronaut']" />
              </div>
              <div>
                <h4>Name</h4>
                <p>Md Mehedi Hasan</p>
              </div>
            </div>

            <div class="contact-method">
              <div class="contact-icon">
                <font-awesome-icon :icon="['fas', 'phone']" />
              </div>
              <div>
                <h4>Phone</h4>
                <p>01789173349, 01537427602</p>

              </div>
            </div>

            <div class="contact-method">
              <div class="contact-icon">
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </div>
              <div>
                <h4>Email</h4>
                <p>mehedihasansamrat.mhs01@gmail.com</p>
              </div>
            </div>
            <div class="contact-method">
              <div class="contact-icon">
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </div>
              <div>
                <h4>Location</h4>
                <p>Tejgaon, Dhaka-1215 Bangladesh</p>
              </div>
            </div>
          </div>

          <div class="social-links">
            <a href="https://www.linkedin.com/in/md-mehedi-hasan-samrat-8a980b2b9/" class="social-link">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
            <a href="https://github.com/Samrat34" class="social-link">
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a href="https://www.facebook.com/mehedi.samrat.3" class="social-link">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <footer class="modern-footer">
      <div class="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25" fill="var(--primary-color)"></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5" fill="var(--primary-color)"></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="var(--primary-color)"></path>
        </svg>
      </div>

      <div class="footer-content">
        <!-- Left Column - Brand Info -->
        <div class="footer-brand">
          <div class="logo">MH</div>
          <h3>Md Mehedi Hasan</h3>
          <p>"Laravel | Vue.js | Full Stack Solutions"</p>
          <div class="footer-social">
            <a href="#" class="social-icon" aria-label="GitHub">
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a href="#" class="social-icon" aria-label="LinkedIn">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
            <a href="#" class="social-icon" aria-label="Discord">
              <font-awesome-icon :icon="['fab', 'discord']" />
            </a>
            <a href="#" class="social-icon" aria-label="Facebook">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
          </div>
        </div>

        <!-- Middle Column - Quick Links -->
        <div class="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><a href="#about"><font-awesome-icon :icon="['fas', 'user-astronaut']" /> About Me</a></li>
            <li><a href="#skills"><font-awesome-icon :icon="['fas', 'code']" /> Skills</a></li>
            <li><a href="#projects"><font-awesome-icon :icon="['fas', 'rocket']" /> Projects</a></li>
            <li><a href="#gallery"><font-awesome-icon :icon="['fas', 'moon']" /> Gallery</a></li>
            <li><a href="#contact"><font-awesome-icon :icon="['fas', 'paper-plane']" /> Contact</a></li>
          </ul>
        </div>

        <!-- Right Column - Contact Info -->
        <div class="footer-contact">
          <h4>Get In Touch</h4>
          <ul>
            <li>
              <font-awesome-icon :icon="['fas', 'envelope']" />
              <span>mehedihasansamrat.mhs01@gmail.com</span>
            </li>
            <li>
              <font-awesome-icon :icon="['fas', 'phone-alt']" />
              <span>+880 1789 173349</span>
            </li>
            <li>
              <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
              <span>Tejgaon, Dhaka, Bangladesh</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2024 Md Mehedi Hasan. All rights reserved.</p>
        <div class="footer-credits">
          <span>Made with <font-awesome-icon :icon="['fas', 'heart']" style="color: #e74c3c;" /> and Vue.js</span>
        </div>
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
import { ref, onMounted, onUnmounted, computed } from 'vue'
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

// Form submission handler
const submitForm = async (e) => {
  e.preventDefault()
  const form = e.target
  const formData = new FormData(form)
  const responseElement = document.getElementById('formResponse')

  try {
    responseElement.textContent = 'Sending message...'
    responseElement.style.color = 'var(--text-color)'
    responseElement.style.display = 'block'

    const response = await fetch('http://localhost/send_email.php', {
      method: 'POST',
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      responseElement.textContent = '✓ Message sent successfully!'
      responseElement.style.color = 'green'
      form.reset()

      setTimeout(() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
      }, 2000)
    } else {
      throw new Error(data.error || 'Failed to send message')
    }
  } catch (error) {
    responseElement.textContent = `✗ ${error.message}`
    responseElement.style.color = 'red'
    console.error('Error:', error)
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
const currentPage = ref(0)
const itemsPerPage = 6 // Items to show per page
const totalItems = 18 // Total gallery items

const totalPages = computed(() => Math.ceil(totalItems / itemsPerPage))

const visibleItems = computed(() => {
  const start = currentPage.value * itemsPerPage
  const end = start + itemsPerPage
  return Array.from({ length: itemsPerPage }, (_, i) => i + start)
})

const nextPage = () => {
  if (currentPage.value < totalPages.value - 1) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--
  }
}
</script>
