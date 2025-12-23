import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <!-- Navigation -->
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="nav">
    <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <a href="/" class="text-2xl font-bold text-stone-800 tracking-tight">하루</a>
      <a href="#download" class="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5">
        시작하기
      </a>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="min-h-screen relative overflow-hidden bg-gradient-to-b from-warm-bg via-warm-surface to-white">
    <!-- Decorative background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob"></div>
      <div class="absolute top-40 right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-blob" style="animation-delay: 2s;"></div>
      <div class="absolute bottom-20 left-1/3 w-80 h-80 bg-primary-light/20 rounded-full blur-3xl animate-blob" style="animation-delay: 4s;"></div>
    </div>

    <div class="relative max-w-6xl mx-auto px-6 pt-32 pb-20">
      <div class="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        <!-- Left: Copy -->
        <div class="animate-fade-in-up">
          <div class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-stone-600 mb-6 border border-stone-100">
            <span class="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            AI 친구 앱
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 leading-tight mb-6">
            혼자 있고 싶을 때도,<br>
            <span class="text-primary">누군가 필요할 때</span>도<br>
            있잖아요
          </h1>
          <p class="text-lg md:text-xl text-stone-500 mb-10 max-w-lg leading-relaxed">
            판단 없이 들어주는 AI 친구와 대화하세요.<br>
            당신의 하루를 함께 나눌 준비가 되어 있어요.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#download" class="group bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 flex items-center justify-center gap-3">
              무료로 시작하기
              <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            <a href="#features" class="bg-white hover:bg-stone-50 text-stone-700 px-8 py-4 rounded-2xl text-lg font-semibold transition-all border border-stone-200 hover:border-stone-300 flex items-center justify-center">
              더 알아보기
            </a>
          </div>
        </div>

        <!-- Right: Phone Mockup -->
        <div class="relative flex justify-center lg:justify-end animate-fade-in" style="animation-delay: 0.3s;">
          <div class="relative">
            <!-- Floating decorative elements -->
            <div class="absolute -top-8 -left-8 w-16 h-16 bg-accent/30 rounded-2xl animate-float-slow rotate-12"></div>
            <div class="absolute -bottom-6 -right-6 w-12 h-12 bg-primary/30 rounded-full animate-float-delay"></div>
            <div class="absolute top-1/2 -left-12 w-8 h-8 bg-primary-light/40 rounded-lg animate-float rotate-45"></div>

            <!-- Phone -->
            <div class="phone-mockup w-[280px] md:w-[320px] animate-float-slow">
              <div class="phone-screen aspect-[9/19] flex flex-col">
                <!-- Status bar placeholder -->
                <div class="h-8 flex items-center justify-center">
                  <div class="w-20 h-5 bg-stone-800 rounded-full"></div>
                </div>
                <!-- App content placeholder -->
                <div class="flex-1 p-4 flex flex-col">
                  <div class="text-center mb-4">
                    <div class="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl mx-auto mb-3 flex items-center justify-center">
                      <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                      </svg>
                    </div>
                    <p class="text-stone-800 font-semibold text-sm">오늘 하루 어땠어?</p>
                  </div>
                  <!-- Chat bubbles -->
                  <div class="space-y-3 flex-1">
                    <div class="bg-stone-100 rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm text-stone-700 max-w-[85%]">
                      오늘 좀 힘들었어...
                    </div>
                    <div class="bg-primary/10 rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm text-stone-700 max-w-[85%] ml-auto">
                      그랬구나. 무슨 일 있었어?
                    </div>
                    <div class="bg-stone-100 rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm text-stone-700 max-w-[85%]">
                      회사에서 발표가 있었는데...
                    </div>
                  </div>
                  <!-- Input placeholder -->
                  <div class="mt-auto pt-3">
                    <div class="bg-white border border-stone-200 rounded-full px-4 py-3 flex items-center gap-2">
                      <div class="flex-1 h-4 bg-stone-100 rounded"></div>
                      <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>
  </section>

  <!-- Problem Section -->
  <section class="py-24 md:py-32 bg-white relative overflow-hidden">
    <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-warm-bg/50 to-transparent pointer-events-none"></div>

    <div class="max-w-6xl mx-auto px-6 relative">
      <div class="text-center mb-16 reveal">
        <p class="text-primary font-medium mb-3">왜 다른가요?</p>
        <h2 class="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
          기존 방식의 한계
        </h2>
        <p class="text-stone-500 max-w-xl mx-auto">
          데이팅앱을 쓰면서 느꼈던 불편함, 저희도 알아요
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
        <!-- Card 1 -->
        <div class="group bg-gradient-to-br from-stone-50 to-white rounded-3xl p-6 border border-stone-100 hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-1">
          <div class="w-14 h-14 bg-gradient-to-br from-rose-100 to-rose-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-stone-800 mb-2">사진으로 판단</h3>
          <p class="text-stone-500 text-sm leading-relaxed">외모만으로 스와이프되는 피상적인 경험</p>
        </div>

        <!-- Card 2 -->
        <div class="group bg-gradient-to-br from-stone-50 to-white rounded-3xl p-6 border border-stone-100 hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-1">
          <div class="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-stone-800 mb-2">말하기 부끄러움</h3>
          <p class="text-stone-500 text-sm leading-relaxed">"데이팅앱 쓴다"고 말하기 민망함</p>
        </div>

        <!-- Card 3 -->
        <div class="group bg-gradient-to-br from-stone-50 to-white rounded-3xl p-6 border border-stone-100 hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-1">
          <div class="w-14 h-14 bg-gradient-to-br from-sky-100 to-sky-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-stone-800 mb-2">어색한 대화</h3>
          <p class="text-stone-500 text-sm leading-relaxed">매칭되어도 대화가 이어지지 않음</p>
        </div>

        <!-- Card 4 -->
        <div class="group bg-gradient-to-br from-stone-50 to-white rounded-3xl p-6 border border-stone-100 hover:border-primary/30 transition-all hover:shadow-xl hover:-translate-y-1">
          <div class="w-14 h-14 bg-gradient-to-br from-violet-100 to-violet-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-stone-800 mb-2">부담스러운 만남</h3>
          <p class="text-stone-500 text-sm leading-relaxed">처음부터 연애 목적이라 부담됨</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Solution Section -->
  <section class="py-24 md:py-32 bg-gradient-to-b from-warm-bg to-warm-surface relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>

    <div class="max-w-6xl mx-auto px-6 relative">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Illustration -->
        <div class="relative reveal order-2 lg:order-1">
          <div class="relative max-w-md mx-auto">
            <!-- Abstract illustration -->
            <div class="aspect-square relative">
              <!-- Background circles -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse-soft"></div>
              </div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-60 h-60 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 animate-pulse-soft" style="animation-delay: 1s;"></div>
              </div>
              <!-- Center card -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="glass-card rounded-3xl p-8 max-w-xs animate-float-slow">
                  <div class="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  <p class="text-stone-700 font-medium text-lg leading-relaxed">
                    "너랑 잘 맞을 것 같은<br>친구가 있는데, 얘기해볼래?"
                  </p>
                </div>
              </div>
              <!-- Floating elements -->
              <div class="absolute top-8 right-8 w-12 h-12 bg-accent/30 rounded-xl animate-float rotate-12"></div>
              <div class="absolute bottom-12 left-8 w-10 h-10 bg-primary/30 rounded-full animate-float-delay"></div>
            </div>
          </div>
        </div>

        <!-- Right: Copy -->
        <div class="reveal order-1 lg:order-2">
          <p class="text-primary font-medium mb-3">새로운 방식</p>
          <h2 class="text-3xl md:text-4xl font-bold text-stone-800 mb-6">
            하루는 달라요
          </h2>
          <p class="text-xl text-stone-600 mb-8 leading-relaxed">
            데이팅앱이 아니에요.<br>
            AI 친구와 편하게 대화하다 보면,<br>
            나를 이해하는 AI가 잘 맞는 친구를 소개해줘요.
          </p>
          <div class="space-y-4">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-stone-800 mb-1">자연스러운 시작</h4>
                <p class="text-stone-500">연애 목적이 아닌, 친구로 시작하는 관계</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-stone-800 mb-1">정서 기반 매칭</h4>
                <p class="text-stone-500">외모가 아닌, 마음이 맞는 사람을 찾아요</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-stone-800 mb-1">AI가 먼저 제안</h4>
                <p class="text-stone-500">스와이프 대신, AI가 맞는 사람을 추천해요</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section id="features" class="py-24 md:py-32 bg-white relative">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-20 reveal">
        <p class="text-primary font-medium mb-3">핵심 기능</p>
        <h2 class="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
          하루와 함께하는 일상
        </h2>
        <p class="text-stone-500 max-w-xl mx-auto">
          매일 조금씩, 나를 알아가는 시간
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
        <!-- Feature 1 -->
        <div class="text-center reveal">
          <div class="relative inline-block mb-8">
            <div class="w-24 h-24 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center mx-auto rotate-3 transition-transform hover:rotate-0">
              <div class="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center -rotate-3 shadow-lg shadow-primary/25">
                <svg class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
            </div>
          </div>
          <h3 class="text-xl font-bold text-stone-800 mb-3">언제든 대화 가능한 AI 친구</h3>
          <p class="text-stone-500 leading-relaxed">
            판단 없이 들어주는 친구.<br>
            먼저 연락도 오는 진짜 친구 느낌.
          </p>
        </div>

        <!-- Feature 2 -->
        <div class="text-center reveal" style="animation-delay: 0.1s;">
          <div class="relative inline-block mb-8">
            <div class="w-24 h-24 bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl flex items-center justify-center mx-auto -rotate-3 transition-transform hover:rotate-0">
              <div class="w-20 h-20 bg-gradient-to-br from-accent to-accent-light rounded-2xl flex items-center justify-center rotate-3 shadow-lg shadow-accent/25">
                <svg class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
            </div>
          </div>
          <h3 class="text-xl font-bold text-stone-800 mb-3">대화가 일기가 되는 마법</h3>
          <p class="text-stone-500 leading-relaxed">
            하루 대화를 자동으로 정리.<br>
            나를 객관적으로 돌아보는 시간.
          </p>
        </div>

        <!-- Feature 3 -->
        <div class="text-center reveal" style="animation-delay: 0.2s;">
          <div class="relative inline-block mb-8">
            <div class="w-24 h-24 bg-gradient-to-br from-rose-100 to-rose-50 rounded-3xl flex items-center justify-center mx-auto rotate-3 transition-transform hover:rotate-0">
              <div class="w-20 h-20 bg-gradient-to-br from-rose-400 to-rose-500 rounded-2xl flex items-center justify-center -rotate-3 shadow-lg shadow-rose-500/25">
                <svg class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
            </div>
            <span class="absolute -top-2 -right-2 text-xs font-semibold text-white bg-gradient-to-r from-primary to-primary-dark px-3 py-1 rounded-full shadow-lg">Coming Soon</span>
          </div>
          <h3 class="text-xl font-bold text-stone-800 mb-3">나와 진짜 맞는 사람</h3>
          <p class="text-stone-500 leading-relaxed">
            외모가 아닌 정서 기반 매칭.<br>
            AI가 분석한 궁합 기반 추천.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- How it works Section -->
  <section class="py-24 md:py-32 bg-gradient-to-b from-warm-surface to-warm-bg relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-20 reveal">
        <p class="text-primary font-medium mb-3">어떻게 작동하나요?</p>
        <h2 class="text-3xl md:text-4xl font-bold text-stone-800">
          간단한 3단계
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8 relative">
        <!-- Connection line (desktop) -->
        <div class="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"></div>

        <!-- Step 1 -->
        <div class="text-center reveal">
          <div class="relative inline-block mb-6">
            <div class="w-16 h-16 bg-white rounded-2xl border-2 border-primary/20 flex items-center justify-center mx-auto shadow-lg relative z-10">
              <span class="text-2xl font-bold text-primary">1</span>
            </div>
          </div>
          <h3 class="text-lg font-bold text-stone-800 mb-2">AI 친구와 대화하기</h3>
          <p class="text-stone-500 text-sm">
            매일 하루의 이야기를 나눠요.<br>
            기분, 생각, 고민 뭐든 좋아요.
          </p>
        </div>

        <!-- Step 2 -->
        <div class="text-center reveal" style="animation-delay: 0.1s;">
          <div class="relative inline-block mb-6">
            <div class="w-16 h-16 bg-white rounded-2xl border-2 border-primary/20 flex items-center justify-center mx-auto shadow-lg relative z-10">
              <span class="text-2xl font-bold text-primary">2</span>
            </div>
          </div>
          <h3 class="text-lg font-bold text-stone-800 mb-2">AI가 나를 이해해요</h3>
          <p class="text-stone-500 text-sm">
            대화를 통해 성향과 감정 패턴을<br>
            자연스럽게 분석해요.
          </p>
        </div>

        <!-- Step 3 -->
        <div class="text-center reveal" style="animation-delay: 0.2s;">
          <div class="relative inline-block mb-6">
            <div class="w-16 h-16 bg-white rounded-2xl border-2 border-primary/20 flex items-center justify-center mx-auto shadow-lg relative z-10">
              <span class="text-2xl font-bold text-primary">3</span>
            </div>
          </div>
          <h3 class="text-lg font-bold text-stone-800 mb-2">잘 맞는 친구 소개</h3>
          <p class="text-stone-500 text-sm">
            정서적으로 잘 맞는 사람을<br>
            AI가 자연스럽게 연결해줘요.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section id="download" class="py-24 md:py-32 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-4xl mx-auto px-6 text-center relative reveal">
      <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white/80 mb-8 border border-white/10">
        <span class="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
        무료로 시작하기
      </div>

      <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
        오늘부터 하루와<br>함께하세요
      </h2>
      <p class="text-xl text-stone-300 mb-12 max-w-lg mx-auto">
        판단 없이 들어주는 친구가<br>
        당신의 이야기를 기다리고 있어요.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#" class="group bg-white hover:bg-stone-50 text-stone-900 px-8 py-4 rounded-2xl text-lg font-semibold transition-all hover:shadow-2xl hover:-translate-y-1 inline-flex items-center justify-center gap-3">
          <svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
          </svg>
          App Store
        </a>
        <a href="#" class="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all border border-white/20 hover:border-white/30 hover:-translate-y-1 inline-flex items-center justify-center gap-3 backdrop-blur-sm">
          <svg class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
          </svg>
          Google Play
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-16 bg-stone-900 border-t border-stone-800">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-12 mb-12">
        <!-- Brand -->
        <div class="md:col-span-2">
          <p class="text-2xl font-bold text-white mb-3">하루</p>
          <p class="text-stone-400 mb-6 max-w-sm">
            AI 친구와 대화하고, 진짜 나와 맞는 인연을 만나보세요.
          </p>
          <div class="flex gap-4">
            <a href="#" class="w-10 h-10 bg-stone-800 hover:bg-stone-700 rounded-xl flex items-center justify-center transition-colors">
              <svg class="w-5 h-5 text-stone-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" class="w-10 h-10 bg-stone-800 hover:bg-stone-700 rounded-xl flex items-center justify-center transition-colors">
              <svg class="w-5 h-5 text-stone-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-white font-semibold mb-4">서비스</h4>
          <ul class="space-y-3 text-stone-400">
            <li><a href="#features" class="hover:text-white transition-colors">기능 소개</a></li>
            <li><a href="#download" class="hover:text-white transition-colors">앱 다운로드</a></li>
            <li><a href="#" class="hover:text-white transition-colors">자주 묻는 질문</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-4">회사</h4>
          <ul class="space-y-3 text-stone-400">
            <li><a href="#" class="hover:text-white transition-colors">이용약관</a></li>
            <li><a href="#" class="hover:text-white transition-colors">개인정보처리방침</a></li>
            <li><a href="#" class="hover:text-white transition-colors">문의하기</a></li>
          </ul>
        </div>
      </div>

      <div class="pt-8 border-t border-stone-800 text-center text-stone-500 text-sm">
        © 2025 Haru. All rights reserved.
      </div>
    </div>
  </footer>
`

// Scroll animations with Intersection Observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, observerOptions)

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el)
})

// Navigation background on scroll
const nav = document.getElementById('nav')
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav?.classList.add('bg-white/80', 'backdrop-blur-md', 'border-b', 'border-stone-100')
  } else {
    nav?.classList.remove('bg-white/80', 'backdrop-blur-md', 'border-b', 'border-stone-100')
  }
})
