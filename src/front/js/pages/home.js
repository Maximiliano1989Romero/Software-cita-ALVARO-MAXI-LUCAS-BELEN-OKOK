import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Carousel, Container, Row, Col, Card, Button, Form, Alert } from "react-bootstrap";
import appointmentImg from "../../img/agenda.jpeg";
import carouselImg1 from "../../img/imagen1.jpg";
import carouselImg2 from "../../img/imagen2.jpg";
import carouselImg3 from "../../img/imagen3.jpg";
import Testimonials from "./testimonial";
import { FaEye, FaStethoscope, FaCalendarCheck } from "react-icons/fa";


export const Home = () => {
	const { store } = useContext(Context);

	const [contactForm, setContactForm] = useState({
		name: '',
		email: '',
		message: ''
	});
	const [formStatus, setFormStatus] = useState({ type: '', message: '' });

	// Manejar cambios en los campos del formulario
	const handleChange = (e) => {
		const { name, value } = e.target;
		setContactForm({ ...contactForm, [name]: value });
	};

	// Enviar el formulario
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(`${process.env.BACKEND_URL}/contact`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(contactForm),
			});

			if (response.ok) {
				setFormStatus({ type: 'success', message: 'Mensaje enviado con éxito.' });
				setContactForm({ name: '', email: '', message: '' });
			} else {
				setFormStatus({ type: 'error', message: 'Error al enviar el mensaje. Inténtelo de nuevo.' });
			}
		} catch (error) {
			console.error('Error al enviar el formulario:', error);
			setFormStatus({ type: 'error', message: 'Ocurrió un error. Inténtelo de nuevo más tarde.' });
		}
	};

	return (
		<Container className="p-5 shadow-lg rounded" style={{ backgroundColor: "#f8f9fa" }}>
			<div className="home-container">
				<div className="home-inicio p-4 shadow m-4">
					<header className="text-center mt-5">
						<h1 className="display-4">Bienvenidos a Nuestra Clínica Oftalmológica</h1>
						<p className="lead">Brindamos atención oftalmológica de calidad con la última tecnología y profesionales expertos.</p>
						<Link to="/login" className="btn btn-primary mt-3">Iniciar Sesión</Link>
					</header>
				</div>
				{/* Carrusel de imágenes */}
				<Carousel className="mt-4" style={{ maxHeight: "500px", overflow: "hidden" }}>
					<Carousel.Item>
						<img className="d-block w-100" src={carouselImg1} alt="Primera imagen" style={{ maxHeight: "500px", objectFit: "cover" }} />
						<Carousel.Caption>
							<h3>Cuida tu salud visual</h3>
							<p>Los mejores tratamientos oftalmológicos a tu alcance.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src={carouselImg2} alt="Segunda imagen" style={{ maxHeight: "500px", objectFit: "cover" }} />
						<Carousel.Caption>
							<h3>Clínica con tecnología avanzada</h3>
							<p>Contamos con equipos de última generación para tu diagnóstico.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="d-block w-100" src={carouselImg3} alt="Tercera imagen" style={{ maxHeight: "500px", objectFit: "cover" }} />
						<Carousel.Caption>
							<h3>Experiencia y profesionalismo</h3>
							<p>Nuestros especialistas están listos para atenderte.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>

				{/* Sección Sobre Nosotros */}
				<section className="mt-5 p-5 bg-light shadow m-4">
					<Container>
						<Row>
							<Col md={6}>
								<h2>Sobre Nosotros</h2>
								<p>Somos una clínica oftalmológica con más de 20 años de experiencia brindando servicios de alta calidad para el cuidado de tu salud visual. Contamos con un equipo de especialistas dedicados y tecnología de última generación para asegurar diagnósticos precisos y tratamientos efectivos.</p>
								<Button variant="primary">Más información</Button>
							</Col>
							<Col md={6}>
								<img src={appointmentImg} alt="Sobre Nosotros" className="img-fluid rounded" />
							</Col>
						</Row>
					</Container>
				</section>

				{/* Sección de Servicios */}
				<section className="mt-5 shadow m-4">
					<Container>
						<h2 className="text-center mb-4">Nuestros Servicios</h2>
						<Row>
							<Col md={4}>
								<Card className="mb-3 text-center">
									<Card.Body>
										<FaEye size={50} className="mb-3 text-primary" />
										<Card.Title>Exámenes de la Vista</Card.Title>
										<Card.Text>Realizamos exámenes completos de la vista para detectar cualquier problema ocular.</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							<Col md={4}>
								<Card className="mb-3 text-center">
									<Card.Body>
										<FaStethoscope size={50} className="mb-3 text-primary" />
										<Card.Title>Tratamientos Especializados</Card.Title>
										<Card.Text>Ofrecemos tratamientos para cataratas, glaucoma, y más.</Card.Text>
									</Card.Body>
								</Card>
							</Col>
							<Col md={4}>
								<Card className="mb-3 text-center">
									<Card.Body>
										<FaCalendarCheck size={50} className="mb-3 text-primary" />
										<Card.Title>Agende su Cita</Card.Title>
										<Card.Text>Reserve su cita online con nuestros especialistas.</Card.Text>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
				</section>

				{/* Sección de Noticias */}
				<section className="mt-5 shadow m-4">
					<Container>
						<h2 className="text-center">Noticias de la Clínica</h2>
						<Row className="mt-4">
							<Col md={4}>
								<Card className="mb-3">
									<Card.Img variant="top" src={appointmentImg} />
									<Card.Body>
										<Card.Title>Nuevo equipo de diagnóstico</Card.Title>
										<Card.Text>Hemos adquirido un equipo de diagnóstico ocular de última generación.</Card.Text>
										<Button variant="primary">Leer más</Button>
									</Card.Body>
								</Card>
							</Col>
							<Col md={4}>
								<Card className="mb-3">
									<Card.Img variant="top" src={carouselImg2} />
									<Card.Body>
										<Card.Title>Campaña de prevención</Card.Title>
										<Card.Text>Participa en nuestra campaña de prevención de enfermedades oculares.</Card.Text>
										<Button variant="primary">Leer más</Button>
									</Card.Body>
								</Card>
							</Col>
							<Col md={4}>
								<Card className="mb-3">
									<Card.Img variant="top" src={carouselImg3} />
									<Card.Body>
										<Card.Title>Charlas informativas</Card.Title>
										<Card.Text>Acompáñanos en nuestras charlas sobre el cuidado visual.</Card.Text>
										<Button variant="primary">Leer más</Button>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</Container>
				</section>

				{/* Sección de Testimonios */}
				<section className="mt-5 bg-light p-5 shadow m-4">
					<Container>

						<Testimonials /> {/* Mostrar testimonios */}
					</Container>
				</section>

				{/* Sección de Contacto */}
				<section className="mt-5 p-5 bg-light shadow m-4">
					<Container>
						<h2 className="text-center mb-4 ">Contáctanos</h2>
						<Row>
							<Col md={6}>
								<Card className="p-3">
								<p>Si deseas más información sobre nuestros servicios o agendar una cita, no dudes en contactarnos.</p>
								<ul className="list-unstyled">
									<li><strong>Teléfono:</strong> +123 456 789</li>
									<li><strong>Email:</strong> contacto@clinicaoftalmologica.com</li>
									<li><strong>Dirección:</strong> Av. Siempre Viva 123, Ciudad</li>
								</ul>
								</Card>
							</Col>
							<Col md={6}>
								<Card className="p-4">
									<Card.Title>Formulario de Contacto</Card.Title>
									<Form onSubmit={handleSubmit}>
										<Form.Group controlId="formName">
											<Form.Label>Nombre</Form.Label>
											<Form.Control
												type="text"
												name="name"
												value={contactForm.name}
												onChange={handleChange}
												placeholder="Ingrese su nombre"
												required
											/>
										</Form.Group>
										<Form.Group controlId="formEmail" className="mt-2">
											<Form.Label>Email</Form.Label>
											<Form.Control
												type="email"
												name="email"
												value={contactForm.email}
												onChange={handleChange}
												placeholder="Ingrese su email"
												required
											/>
										</Form.Group>
										<Form.Group controlId="formMessage" className="mt-2">
											<Form.Label>Mensaje</Form.Label>
											<Form.Control
												as="textarea"
												name="message"
												value={contactForm.message}
												onChange={handleChange}
												rows={3}
												placeholder="Escriba su mensaje"
												required
											/>
										</Form.Group>
										<Button variant="primary" type="submit" className="mt-3 w-100">
											Enviar Mensaje
										</Button>
									</Form>
									{formStatus.message && (
										<Alert variant={formStatus.type === 'success' ? 'success' : 'danger'} className="mt-3">
											{formStatus.message}
										</Alert>
									)}
								</Card>
							</Col>
						</Row>
					</Container>
				</section>
			</div>
		</Container>
	);
};
