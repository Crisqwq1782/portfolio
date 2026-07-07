import { useMemo, useState } from 'react'
import emailjs from 'emailjs-com'
import '../assets/css/styles.css'
import './index.css'
import card1 from '../assets/img/card-1.png'
import card2 from '../assets/img/card-2.png'
import card3 from '../assets/img/card-3.png'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SkillsSection from './components/SkillsSection'
import InfoSection from './components/InfoSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

const skills = [
  {
    icon: 'fa-brands fa-html5',
    title: 'HTML',
    description:
      'Uso de HTML para estructurar y organizar el contenido, creando una base sólida que facilita la navegación y mejora la accesibilidad.',
  },
  {
    icon: 'fa-brands fa-css3-alt',
    title: 'CSS',
    description:
      'Manejo de CSS para dar estilo y formato a las páginas web, creando diseños atractivos y responsivos que mejoran la experiencia del usuario.',
    featured: true,
  },
  {
    icon: 'fa-brands fa-bootstrap',
    title: 'Bootstrap',
    description:
      'Experiencia en el uso de Bootstrap para desarrollar sitios web responsivos y adaptativos con una base sólida y rápida.',
  },
]

const projects = [
  {
    image: card1,
    title: 'Pagina Tipo Cupón.',
    description: 'Página web tipo cupón, donde se muestran diferentes ofertas y descuentos de productos y servicios.',
  },
  {
    image: card2,
    title: 'Landpage Restaurante.',
    description: 'Web informativa para un restaurante, mostrando su menú, ubicación y contacto.',
  },
  {
    image: card3,
    title: 'Página Portafolio',
    description: 'Diseño para portafolio con formulario de contacto y redes sociales para establecer comunicación con futuros clientes.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [feedback, setFeedback] = useState('')

  const year = useMemo(() => new Date().getFullYear(), [])
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  const isEmailjsConfigured = Boolean(serviceId && templateId && publicKey)

  if (publicKey && !emailjs._userID) {
    emailjs.init(publicKey)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (submitted) setSubmitted(false)
    if (feedback) setFeedback('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!isEmailjsConfigured) {
      setSubmitted(false)
      setFeedback('Activa el envío agregando tus credenciales de EmailJS en el archivo .env del proyecto.')
      return
    }

    setIsSending(true)
    setFeedback('')

    const templateParams = {
      name: formData.name,
      user_name: formData.name,
      email: formData.email,
      user_email: formData.email,
      message: formData.message,
      details: formData.message,
      project_details: formData.message,
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      setSubmitted(true)
      setFeedback('Mensaje enviado correctamente. Te responderé pronto.')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitted(false)
      setFeedback('No se pudo enviar el mensaje. Revisa tus credenciales de EmailJS y el template.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="app-shell">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main id="home">
        <Hero />
        <SkillsSection skills={skills} />

        <InfoSection title="Metas y Futuro" icon="fa-solid fa-flag" iconClass="fa-solid fa-list">
          <p className="fs-5 text-secondary-light">
            Mi objetivo es evolucionar hacia roles de DevOps y QA, integrando la automatización y la calidad en cada etapa del desarrollo. Aspiro a construir tecnología que no solo funcione, sino que sea tanto agradable a la vista como funcional.
          </p>
        </InfoSection>

        <InfoSection title="Educación" icon="fa-solid fa-building-columns" iconClass="fa-solid fa-school">
          <ol className="fs-5 text-secondary-light">
            <li>Desafío Latam: Desarrollo Full Stack. (2023 - Presente)</li>
            <li>DUOC UC: Administración Gastronomica. (2020 - 2024)</li>
          </ol>
        </InfoSection>

        <ProjectsSection projects={projects} />
        <ContactSection
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isSending={isSending}
          feedback={feedback}
          submitted={submitted}
        />
      </main>

      <Footer year={year} />
    </div>
  )
}

export default App
