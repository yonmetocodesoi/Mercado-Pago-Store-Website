import React from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, Download, HelpCircle, FileText, Headphones, Shield, Zap, Box, Layers, Wrench, Globe, Bot, MessageCircle, ShoppingCart, Menu, X } from 'lucide-react';

const DashboardLayout = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const menuItems = [
    { path: '/dashboard', icon: Cpu, label: 'Como Funciona' },
    { path: '/dashboard/store', icon: ShoppingCart, label: 'Loja' },
    { path: '/dashboard/downloads', icon: Download, label: 'Downloads' },
    { path: '/dashboard/faq', icon: HelpCircle, label: 'FAQ' },
    { path: '/dashboard/terms', icon: FileText, label: 'Termos de Uso' },
    { path: '/dashboard/support', icon: Headphones, label: 'Suporte' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-gray-900/50 backdrop-blur-md border-b border-cyan-500/20">
        <div className="flex items-center gap-2">
          <Bot className="w-8 h-8 text-cyan-400" />
          <h1 className="text-xl font-bold text-cyan-400">SUPRIBOTS</h1>
        </div>
        <button onClick={toggleMobileMenu} className="text-cyan-400">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
        fixed md:relative
        top-0 md:top-auto
        left-0
        h-full
        w-64
        bg-gray-900/50 backdrop-blur-md
        border-r border-cyan-500/20
        transition-transform duration-300 ease-in-out
        z-50 md:z-auto
      `}>
        <div className="p-4">
          <div className="hidden md:flex flex-col items-center mb-8">
            <Bot className="w-24 h-24 text-cyan-400" />
            <h1 className="text-xl font-bold text-center text-cyan-400 mt-4">SUPRIBOTS.COM</h1>
          </div>
        </div>
        <nav className="px-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all
                ${location.pathname === item.path 
                  ? 'bg-cyan-500/20 text-cyan-400' 
                  : 'hover:bg-cyan-500/10 text-gray-400 hover:text-cyan-400'}`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 mt-0 md:mt-0">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="neon-border p-4 md:p-6 rounded-lg bg-gray-900/30 backdrop-blur-sm"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
        <Icon className="w-6 h-6 text-cyan-400" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-cyan-400 mb-2">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

const HowItWorks = () => (
  <div className="space-y-8 md:space-y-12 max-w-6xl mx-auto px-4 md:px-8">
    <section className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4">O que é o SupriBots Tools?</h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Uma ferramenta avançada que utiliza conexões seguras com APIs das principais plataformas de streaming para impulsionar sua visibilidade de forma segura e eficiente.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="neon-border p-4 md:p-6 rounded-lg relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Secure Connections"
            className="w-full h-48 object-cover rounded-lg mb-6"
          />
          <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4 relative z-10">Conexões Seguras</h3>
          <p className="text-gray-300 leading-relaxed relative z-10">
            Utilizamos tecnologia de ponta para estabelecer conexões seguras com as principais plataformas de streaming, garantindo a segurança e eficiência do seu boost.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="neon-border p-4 md:p-6 rounded-lg relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Analytics"
            className="w-full h-48 object-cover rounded-lg mb-6"
          />
          <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4 relative z-10">Tecnologia Avançada</h3>
          <p className="text-gray-300 leading-relaxed relative z-10">
            Nossa infraestrutura utiliza algoritmos avançados para distribuir viewers de forma natural e orgânica, maximizando o impacto do seu boost.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="space-y-6 md:space-y-8">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl md:text-3xl font-bold text-cyan-400 text-center"
      >
        Vantagens de usar o SupriBots
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <FeatureCard
          icon={Zap}
          title="Ranqueamento da Live"
          description="Aumente sua visibilidade nas recomendações da plataforma com mais viewers engajados em seu conteúdo."
        />
        <FeatureCard
          icon={Box}
          title="Fácil Instalação"
          description="Setup rápido e intuitivo. Em poucos minutos seu bot estará configurado e pronto para uso."
        />
        <FeatureCard
          icon={Shield}
          title="Segurança Garantida"
          description="Conexões seguras e criptografadas, sem risco de bans ou penalizações na sua conta."
        />
        <FeatureCard
          icon={Headphones}
          title="Suporte Premium"
          description="Equipe dedicada para ajudar você 24/7, garantindo a melhor experiência possível."
        />
        <FeatureCard
          icon={Globe}
          title="Compatibilidade Total"
          description="Funciona perfeitamente com as principais plataformas de streaming do mercado."
        />
        <FeatureCard
          icon={Wrench}
          title="Customização Completa"
          description="Ajuste o número de viewers e duração do boost de acordo com suas necessidades."
        />
      </div>
    </section>

    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="neon-border p-4 md:p-8 rounded-lg bg-gradient-to-r from-cyan-500/10 to-transparent relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="relative z-10">
        <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4">Pronto para começar?</h2>
        <p className="text-gray-300 mb-6">
          Junte-se a milhares de streamers que já estão aumentando sua visibilidade com o SupriBots Tools.
        </p>
        <Link
          to="/dashboard/downloads"
          className="cyber-button inline-flex items-center gap-2"
        >
          <Download className="w-5 h-5" />
          <span>Começar Agora</span>
        </Link>
      </div>
    </motion.section>
  </div>
);

const Store = () => {
  const handleBuy = async () => {
    window.location.href = 'https://mpago.la/2zVFbig';
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Loja</h2>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="neon-border p-4 md:p-8 rounded-lg bg-gray-900/30 backdrop-blur-sm"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <img 
              src="https://i.imgur.com/cDafFnb.jpeg" 
              alt="StreamBooster" 
              className="w-full rounded-lg object-cover aspect-video"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">StreamBooster</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-green-400">R$ 149,99</span>
                <span className="text-gray-400">Pagamento único</span>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>StreamBooster é um software avançado projetado para impulsionar sua presença nas plataformas de streaming:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span>Envio seguro de viewers para sua transmissão</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span>Aumento de visibilidade na plataforma</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Box className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span>Interface fácil de usar</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span>Configurações personalizáveis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Headphones className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span>Suporte técnico incluso</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <button
              onClick={handleBuy}
              className="cyber-button w-full py-4 text-lg font-bold flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-6 h-6" />
              Comprar Agora
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Downloads = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/dashboard/store');
  }, [navigate]);

  return null;
};

const FAQ = () => (
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Perguntas Frequentes</h2>
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="neon-border p-4 md:p-6 rounded-lg bg-gray-900/30 backdrop-blur-sm"
      >
        <div className="flex gap-4">
          <span className="text-2xl text-cyan-400">❓</span>
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-2">O que é o SupriBots Tools?</h3>
            <p className="text-gray-300">O SupriBots Tools é um serviço que utiliza conexões seguras para aumentar a audiência de transmissões ao vivo, enviando viewers de forma segura para sua live.</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="neon-border p-4 md:p-6 rounded-lg bg-gray-900/30 backdrop-blur-sm"
      >
        <div className="flex gap-4">
          <span className="text-2xl text-cyan-400">🔒</span>
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-2">O SupriBots é seguro?</h3>
            <p className="text-gray-300">Sim! O sistema utiliza apenas conexões seguras e segue as diretrizes das plataformas para minimizar qualquer risco.</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="neon-border p-4 md:p-6 rounded-lg bg-gray-900/30 backdrop-blur-sm"
      >
        <div className="flex gap-4">
          <span className="text-2xl text-cyan-400">🚀</span>
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Quais as vantagens de usar o SupriBots?</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Maior visibilidade → Sua live terá mais viewers, o que pode ajudar no ranqueamento.</li>
              <li>• Fácil instalação → Basta um único setup para começar a usar.</li>
              <li>• Totalmente seguro → Conexões protegidas e sem risco de bans.</li>
              <li>• Suporte rápido → Nossa equipe está sempre disponível para ajudar.</li>
              <li>• Customização → Escolha o número de viewers e a duração do boost.</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="neon-border p-4 md:p-6 rounded-lg bg-gray-900/30 backdrop-blur-sm"
      >
        <div className="flex gap-4">
          <span className="text-2xl text-cyan-400">💰</span>
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-2">O SupriBots é gratuito?</h3>
            <p className="text-gray-300">O serviço pode ter planos gratuitos e pagos, dependendo da demanda e dos recursos desejados.</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="neon-border p-4 md:p-6 rounded-lg bg-gray-900/30 backdrop-blur-sm"
      >
        <div className="flex gap-4">
          <span className="text-2xl text-cyan-400">🔄</span>
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Os viewers são bots ou pessoas reais?</h3>
            <p className="text-gray-300">Os viewers são gerados através de conexões automatizadas, garantindo a estabilidade da audiência.</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="neon-border p-4 md:p-6 rounded-lg bg-gray-900/30 backdrop-blur-sm"
      >
        <div className="flex gap-4">
          <span className="text-2xl text-cyan-400">🎥</span>
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-2">O SupriBots funciona em quais plataformas?</h3>
            <p className="text-gray-300">Funciona nas principais plataformas de transmissão ao vivo, incluindo Twitch, YouTube Live e Kick.</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="neon-border p-4 md:p-6 rounded-lg bg-gray-900/30 backdrop-blur-sm"
      >
        <div className="flex gap-4">
          <span className="text-2xl text-cyan-400">📥</span>
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Como faço para baixar e instalar?</h3>
            <p className="text-gray-300">A instalação é simples! Basta fazer o download pelo painel e seguir as instruções do setup automatizado.</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="neon-border p-4 md:p-6 rounded-lg bg-gray-900/30 backdrop-blur-sm"
      >
        <div className="flex gap-4">
          <span className="text-2xl text-cyan-400">⚙️</span>
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Posso usar o SupriBots em mais de uma conta?</h3>
            <p className="text-gray-300">Sim, desde que esteja dentro dos limites do seu plano e respeite as regras da plataforma.</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="neon-border p-4 md:p-6 rounded-lg bg-gray-900/30 backdrop-blur-sm"
      >
        <div className="flex gap-4">
          <span className="text-2xl text-cyan-400">📞</span>
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Como posso entrar em contato com o suporte?</h3>
            <p className="text-gray-300">Nosso suporte está disponível diretamente pelo site, através do painel de usuário.</p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const Terms = () => (
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-cyan-400 mb-6">Política de Privacidade</h2>
    
    <div className="space-y-6">
      <div className="neon-border p-4 md:p-6 rounded-lg">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">Introdução</h3>
        <p className="text-gray-300 leading-relaxed">
          A sua privacidade é importante para nós. É política do SupriBots respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site SupriBots, e outros sites que possuímos e operamos.
        </p>
      </div>

      <div className="neon-border p-4 md:p-6 rounded-lg">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">Coleta de Informações</h3>
        <p className="text-gray-300 leading-relaxed">
          Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
        </p>
      </div>

      <div className="neon-border p-4 md:p-6 rounded-lg">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">Compartilhamento de Dados</h3>
        <p className="text-gray-300 leading-relaxed">
          Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
        </p>
      </div>

      <div className="neon-border p-4 md:p-6 rounded-lg">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">Links Externos</h3>
        <p className="text-gray-300 leading-relaxed">
          O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
        </p>
      </div>

      <div className="neon-border p-4 md:p-6 rounded-lg">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">Publicidade</h3>
        <p className="text-gray-300 leading-relaxed">
          O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos.
        </p>
      </div>

      <div className="neon-border p-4 md:p-6 rounded-lg">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">Compromisso do Usuário</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o SupriBots oferece no site e com caráter enunciativo, mas não limitativo:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li>Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
          <li>Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, kiwibet ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
          <li>Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do SupriBots, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
        </ul>
      </div>

      <div className="neon-border p-4 md:p-6 rounded-lg">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">Atualização</h3>
        <p className="text-gray-300 leading-relaxed">
          Esta política é efetiva a partir de 18 February 2025 19:49
        </p>
      </div>
    </div>
  </div>
);

const Support = () => (
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-cyan-400 mb-6">Suporte</h2>
    
    <div className="mb-8">
      <motion.a
        href="https://wa.me/5588994853377"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        className="neon-border p-4 md:p-6 rounded-lg bg-gray-900/30 backdrop-blur-sm flex items-center gap-4 hover:bg-gray-900/50 transition-all"
      >
        <div className="p-3 bg-green-500/20 rounded-lg border border-green-500/30">
          <MessageCircle className="w-6 h-6 text-green-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-green-400 mb-2">WhatsApp</h3>
          <p className="text-gray-300">(88) 99485-3377</p> ```
        </div>
      </motion.a>
    </div>

    <div className="neon-border p-4 md:p-6 rounded-lg">
      <h3 className="text-xl font-bold text-cyan-400 mb-4">Envie uma Mensagem</h3>
      <form className="space-y-4">
        <input 
          type="email" 
          placeholder="Seu email" 
          className="cyber-input w-full"
        />
        <textarea 
          placeholder="Sua mensagem" 
          className="cyber-input w-full h-32"
        />
        <button type="submit" className="cyber-button">
          Enviar Mensagem
        </button>
      </form>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<HowItWorks />} />
        <Route path="/store" element={<Store />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;