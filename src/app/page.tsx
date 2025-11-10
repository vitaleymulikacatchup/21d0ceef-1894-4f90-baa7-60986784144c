"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboardCarousel from "@/components/sections/hero/HeroBillboardCarousel";
import AboutMetric from "@/components/sections/about/AboutMetric";
import FeatureCardTwo from "@/components/sections/feature/FeatureCardTwo";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import { Sparkles, TrendingUp, Users, Clock, Award, Zap, Cloud, Shield, Headphones, Code, MessageSquare, Handshake, Phone } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="small"
      background="fluid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Services", id: "feature" },
            { name: "About", id: "about" },
            { name: "Clients", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="TechnoVision IT"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Transforming Business Through Technology"
          description="Leading IT solutions company providing cutting-edge technology services, digital transformation, and innovative software development to help your business thrive in the digital age"
          tag="Innovation Leader"
          tagIcon={Sparkles}
          buttons={[
            { text: "Explore Services", href: "feature" },
            { text: "Contact Us", href: "contact" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/g4d96b09e5c68d9b6bcc2052b7eb2ea6cdedcae081119953e2539cf8e224c4898d36a81500c4e3a48b8eef6e766b832d86d4d215a51580c9536c52a15401f4545_1280.jpg",
              imageAlt: "Modern technology workspace"
            },
            {
              imageSrc: "https://pixabay.com/get/g374c7a69787e7647e53a6e890a9aa4209d9ab4cd37f6557d5670bdb2419b918241e97c86ee57e9bef7e135f960bf7d381ae5369f8d1262347399c4196a749f42_1280.jpg",
              imageAlt: "Software development team"
            },
            {
              imageSrc: "https://pixabay.com/get/gf682ee3f87795ae65505d33a1df25eb7c5217d42b4e4f3c57291dfbfcee281b7808ddc3ec058ba0e1c53711c2707234d1c9059a4deb24f54aedd1e1c9c9346db_1280.jpg",
              imageAlt: "Digital transformation"
            },
            {
              imageSrc: "https://pixabay.com/get/ge7d10d342c358a3b57a32f8fbffbec07ae78c5333114dcca60c74fff776362032aca3c7d63565a71e01b3a3f074ecb7a792a8685f56d8aa65ca0883ddecebc42_1280.jpg",
              imageAlt: "IT infrastructure"
            },
            {
              imageSrc: "https://pixabay.com/get/g09ae96a64df5448435ad3ecbd90a1ccbeb953812a2e1053d10e0cce25c9a6286ff6b95fc48acb11a843f4ded0ac31cb219b6a8f5881529698f0c37f3dbb11d94_1280.jpg",
              imageAlt: "Cloud computing"
            },
            {
              imageSrc: "https://pixabay.com/get/g50015341b110bb82eba737b459e111bdf2833bb4dd18a716a03ed5b0fab3171c324bd11241ebfdb77bf18fac1a805437a5bfc8910562277595faf3162837a32d_1280.jpg",
              imageAlt: "Cybersecurity"
            },
            {
              imageSrc: "https://pixabay.com/get/g1001f2c3d2f775ccc6638e0165a9df4ce327f29939689f6af78258d07c1981becb685e7c15c4c3f246dfea497bd4eab52801ea7fff2698ecf54bd4f479ff65f6_1280.jpg",
              imageAlt: "AI technology"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="At TechnoVision IT, we are passionate about empowering businesses through innovative technology solutions. With over a decade of experience, we transform challenges into opportunities and help organizations achieve their digital transformation goals."
          metrics={[
            {
              icon: TrendingUp,
              label: "Projects Delivered",
              value: "500+"
            },
            {
              icon: Users,
              label: "Happy Clients",
              value: "200+"
            },
            {
              icon: Clock,
              label: "Years Experience",
              value: "12+"
            },
            {
              icon: Award,
              label: "Industry Awards",
              value: "25+"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Comprehensive IT Solutions"
          description="We offer a full spectrum of technology services designed to streamline operations, enhance security, and drive business growth"
          tag="Our Services"
          tagIcon={Zap}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "Cloud Computing",
              description: "Scalable cloud infrastructure and migration services that reduce costs and improve flexibility while ensuring seamless business continuity",
              icon: Cloud,
              button: {
                text: "Learn More",
                href: "https://technovision-it.com/cloud"
              }
            },
            {
              title: "Cybersecurity",
              description: "Comprehensive security solutions protecting your digital assets with advanced threat detection, prevention, and incident response capabilities",
              icon: Shield,
              button: {
                text: "Learn More",
                href: "https://technovision-it.com/security"
              }
            },
            {
              title: "Technical Support",
              description: "24/7 expert technical support and maintenance services ensuring your systems run smoothly with minimal downtime and maximum efficiency",
              icon: Headphones,
              button: {
                text: "Learn More",
                href: "https://technovision-it.com/support"
              }
            },
            {
              title: "Software Development",
              description: "Custom software development and application modernization services tailored to your specific business needs and requirements",
              icon: Code,
              button: {
                text: "Learn More",
                href: "https://technovision-it.com/development"
              }
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Real feedback from businesses we've helped transform through innovative IT solutions"
          tag="Client Stories"
          tagIcon={MessageSquare}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "InnovateCorp",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g569c6ce31a75581ac55f0d30349ce22ecf4a441d645910176311c710a87dd7288fea6eeb5389a6909032f64838d0b0bf49c81de491bc063bbcebaf7d11989b0a_1280.jpg"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "CTO",
              company: "TechFlow Solutions",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g4d57850b5765889ad28bd7029efa085a3051356dcf639de80624ec1c8b0b79de7ef16f0bf849ed45784fe56ed8225f69f34b370fcdb9a8c5fa40983138a5c3c9_1280.jpg"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "IT Director",
              company: "DataSync Inc",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gcc64f20e7e2f350b9eea9a475a62a89224057ec389e7a64083f96e09e4d1935052807368c8f7f9c5dc4a4d973c8d0a8ae9ffea911275af90bcc372f56f7bb358_1280.jpg"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Operations Manager",
              company: "CloudBridge Systems",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g7455178b4203a85d346e652349e80e570f9cbb0daae791d11e30c3958efe6afe9be6f7777b247062486ef542ebc6aabc0f2db1c1de9ab48d5e2f256fbe5c9a45_1280.jpg"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="We partner with top technology companies to deliver enterprise-grade solutions"
          tag="Our Partners"
          tagIcon={Handshake}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g3ca25c5d6f6a0bb39c897f498eb1a84e6abe15efab76246fb7e7c99f4c0f533d4358f983475cb3459f2419d145d6c920e016a472cb87e3ef159321bd03f7540e_1280.jpg",
            "https://pixabay.com/get/gcb0cb4c06f4e6471fd084e2e5390bce712f2285f2b0c39d49691a4cdd06faa86342da19542b14a531b42ec800b1d177bb2653f92af1a51a3f77896efc60de9a2_1280.jpg",
            "https://pixabay.com/get/g37439d4e0d5e72402bfa55237f9bcc12cb6b0a7bef4b4834d4e561300c1b55bd4b3b35ec9481728995d50865718b74c0460312069eae764eeff495153b497c9e_1280.jpg",
            "https://pixabay.com/get/g626f360846000dfc2ae77a3ce856cf7c6eff0186f20e1b12848de2c548725287bf4504a68b13edaa54c183e83632a7bdb6a4ce33c4a702c295581d34b172d5a0_1280.jpg",
            "https://pixabay.com/get/ge12b460618759f0e1ca799142a12edf0aff11b4260c70ead244e916fd481f1daf74a3e0c78b9f5569ed39d33c765f9989f21b858c1fbcddb79d36fcda4085fb8_1280.jpg",
            "https://pixabay.com/get/gd2ad4cd4338bdc7ad300978d67dc4b2655a924300d97e96e2180480715024ada99bf86396ede0105de22779bbbf10df8bff62077dd39907a52872b5a9c26130c_1280.jpg",
            "https://pixabay.com/get/g79d3e2679abef3bc3b4554aa6e27ac87fd2d6936c08e71d02923799b78d5d46327f204c678ee35a231fcbedc44923602b90eb16bc71776ad07ea341f0f3bf091_1280.jpg"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Get answers to common questions about our IT services and solutions"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What IT services do you offer?",
              content: "We provide comprehensive IT services including cloud computing, cybersecurity, software development, technical support, digital transformation consulting, and IT infrastructure management."
            },
            {
              id: "2",
              title: "Do you provide 24/7 support?",
              content: "Yes, we offer round-the-clock technical support and monitoring services to ensure your systems operate smoothly with minimal downtime."
            },
            {
              id: "3",
              title: "How do you ensure data security?",
              content: "We implement multi-layered security measures including advanced threat detection, encryption, regular security audits, and compliance with industry standards like GDPR and HIPAA."
            },
            {
              id: "4",
              title: "Can you help with cloud migration?",
              content: "Absolutely! We specialize in seamless cloud migration services, helping businesses transition to cloud platforms like AWS, Azure, and Google Cloud with minimal disruption."
            },
            {
              id: "5",
              title: "What is your project timeline?",
              content: "Project timelines vary depending on scope and complexity. We provide detailed project plans with realistic timelines during our initial consultation and keep you updated throughout the process."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          title="Ready to Transform Your Business?"
          description="Contact us today to discuss your IT needs and discover how our innovative solutions can drive your business forward"
          tagIcon={Phone}
          imageSrc="https://pixabay.com/get/g4b2ee217efeb35b6d23fba2e9f573445b86f46c97531d63b05ac5b8d4aa700268ec384ee68bd2e8937f004b323bad6b022abdd4f10bb3acf7cca273f1e297e7e_1280.jpg"
          imageAlt="IT consultation meeting"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Contact Us"
          termsText="By submitting your email, you agree to receive updates about our services and solutions."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="TechnoVision IT"
          columns={[
            {
              items: [
                { label: "Cloud Computing", href: "https://technovision-it.com/cloud" },
                { label: "Cybersecurity", href: "https://technovision-it.com/security" },
                { label: "Software Development", href: "https://technovision-it.com/development" },
                { label: "Technical Support", href: "https://technovision-it.com/support" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "https://technovision-it.com/team" },
                { label: "Careers", href: "https://technovision-it.com/careers" },
                { label: "News", href: "https://technovision-it.com/news" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Support Portal", href: "https://support.technovision-it.com" },
                { label: "Documentation", href: "https://docs.technovision-it.com" },
                { label: "System Status", href: "https://status.technovision-it.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}