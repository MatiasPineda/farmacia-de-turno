from os import path

import environ


ROOT = environ.Path(__file__).path('../' * 2)
ENV = environ.Env(DJANGO_DEBUG=(bool, False), )
if path.isfile(ROOT('.env')):
    environ.Env.read_env(ROOT('.env'))

SITE_ROOT = ROOT()

DEBUG = ENV('DJANGO_DEBUG')
SECRET_KEY = ENV('DJANGO_SECRET_KEY')
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'whitenoise.runserver_nostatic',
    'django.contrib.staticfiles',
    'django.contrib.sites',

    # Local
    'users',
    'farmacias_app',

    # 3rd party
    'rest_framework',
    'corsheaders',
]

AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
)

SITE_ID = 1
LOGIN_REDIRECT_URL = 'home'

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'farmacias_turno_project.urls'

CORS_ORIGIN_ALLOW_ALL = True

CORS_ORIGIN_WHITELIST = (
    'http://localhost:8080',  # default vue
    'http://localhost:8000',  # devault django
    'http://farmacias-de-turno.herokuapp.com',  # heroku
    'https://matiaspineda.github.io',      # github pages
)

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [ROOT('templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
            'debug': DEBUG,
        },
    },
]

WSGI_APPLICATION = 'farmacias_turno_project.wsgi.application'

DATABASES = {'default': ENV.db()}
if ENV('CI', default=False):
    DATABASES['default']['TEST'] = ENV.db()

AUTH_USER_MODEL = 'users.User'
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'es'
TIME_ZONE = 'America/Santiago'
USE_I18N = True
USE_L10N = True
USE_TZ = True

# Allow all host headers
ALLOWED_HOSTS = ['*']

# These are weirdly reversed because it makes the IDE sorta happier.
# /static/whatever looks in the static directory, which is where the precompiled files live.
STATIC_ROOT = ROOT('staticfiles')
STATICFILES_DIRS = ['static']
STATIC_URL = '/static/'
