import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: 'Изготовление памятников',
      description: 'Индивидуальный подход к каждому заказу. Работаем с гранитом и мрамором высочайшего качества.',
      icon: 'Hammer'
    },
    {
      title: 'Установка',
      description: 'Профессиональная установка с соблюдением всех технологий и норм. Гарантия на все работы.',
      icon: 'Settings'
    },
    {
      title: 'Ремонт и реставрация',
      description: 'Восстановление и обновление памятников любой сложности. Возвращаем первоначальный вид.',
      icon: 'Wrench'
    }
  ];

  const materials = [
    {
      name: 'Гранит',
      description: 'Самый прочный и долговечный материал. Устойчив к любым погодным условиям. Сохраняет вид десятилетиями.',
      features: ['Высокая прочность', 'Морозостойкость', 'Не требует ухода']
    },
    {
      name: 'Мрамор',
      description: 'Благородный камень с изысканной текстурой. Идеален для создания элегантных монументов.',
      features: ['Элегантный вид', 'Легкая обработка', 'Уникальный рисунок']
    }
  ];

  const portfolio = [
    { 
      id: 1, 
      type: 'Вертикальный памятник из гранита', 
      material: 'Гранит',
      image: 'https://cdn.poehali.dev/projects/5304eb50-a329-46d5-a5e0-ca59d3305487/files/8c23992b-0f3f-4ec5-b135-5df6e4e89dd9.jpg'
    },
    { 
      id: 2, 
      type: 'Мраморный комплекс', 
      material: 'Мрамор',
      image: 'https://cdn.poehali.dev/projects/5304eb50-a329-46d5-a5e0-ca59d3305487/files/d2fc66bd-171a-45fb-b95b-63902e0d3e68.jpg'
    },
    { 
      id: 3, 
      type: 'Двойной памятник', 
      material: 'Гранит',
      image: 'https://cdn.poehali.dev/projects/5304eb50-a329-46d5-a5e0-ca59d3305487/files/a6a3eaec-8819-4916-86da-98fb59aa1a82.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-accent/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Mountain" className="text-accent" size={32} />
              <h1 className="text-2xl font-bold text-primary-foreground">Империя Гранита</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              {['home', 'services', 'portfolio', 'about', 'materials', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm transition-colors hover:text-accent ${
                    activeSection === section ? 'text-accent' : 'text-primary-foreground/80'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'services' && 'Услуги'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'about' && 'О компании'}
                  {section === 'materials' && 'Материалы'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
            Памятники из гранита и мрамора
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Профессиональное изготовление, установка и ремонт памятников в Мариуполе
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('services')} className="bg-accent hover:bg-accent/90 text-white">
              <Icon name="ArrowRight" className="mr-2" size={20} />
              Наши услуги
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
              <Icon name="Phone" className="mr-2" size={20} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Полный спектр услуг по работе с памятниками
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-scale-in border-accent/20">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-accent" size={24} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Наши работы</h2>
          <p className="text-center text-muted-foreground mb-12">
            Примеры выполненных проектов
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.type}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{item.type}</CardTitle>
                  <CardDescription>Материал: {item.material}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">О компании</h2>
          <Card className="border-accent/20">
            <CardContent className="pt-6">
              <div className="space-y-6 text-lg">
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-primary">Империя Гранита</span> — надежный партнер в создании 
                  достойных памятников в Мариуполе. Мы специализируемся на работе с натуральным камнем высочайшего качества.
                </p>
                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <div className="flex items-start space-x-4">
                    <Icon name="Award" className="text-accent mt-1" size={32} />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">Долгосрочная гарантия</h3>
                      <p className="text-muted-foreground">
                        Мы предоставляем долгосрочную гарантию на качество работ и материалов. 
                        Уверенность в том, что памятник сохранит свой первозданный вид на долгие годы.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Наша команда профессионалов имеет многолетний опыт работы с камнем. 
                  Мы используем современное оборудование и проверенные технологии, 
                  что позволяет создавать памятники высочайшего качества.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="materials" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Материалы</h2>
          <p className="text-center text-muted-foreground mb-12">
            Работаем только с качественным натуральным камнем
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {materials.map((material, index) => (
              <Card key={index} className="border-accent/20">
                <CardHeader>
                  <CardTitle className="text-3xl flex items-center">
                    <Icon name="Gem" className="mr-3 text-accent" size={32} />
                    {material.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{material.description}</p>
                  <div className="space-y-2">
                    {material.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Icon name="CheckCircle" className="text-accent mr-2" size={20} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12">
            Свяжитесь с нами для консультации
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl">Наши контакты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" className="text-accent mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">Мариуполь, Украина</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Phone" className="text-accent mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <a href="tel:+79490732315" className="text-muted-foreground hover:text-accent transition-colors">+7 (949) 073-23-15</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Send" className="text-accent mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Telegram</p>
                    <a href="https://t.me/GKgranit19" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">@GKgranit19</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Mail" className="text-accent mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@imperiya-granita.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Clock" className="text-accent mt-1" size={24} />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-muted-foreground">Сб: 10:00 - 15:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="text-2xl">Форма обратной связи</CardTitle>
                <CardDescription>Оставьте заявку и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" />
                  </div>
                  <div>
                    <Textarea placeholder="Ваше сообщение" rows={4} />
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Mountain" className="text-accent" size={28} />
            <p className="text-xl font-bold">Империя Гранита</p>
          </div>
          <p className="text-primary-foreground/60">
            © 2024 Империя Гранита. Мариуполь. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;