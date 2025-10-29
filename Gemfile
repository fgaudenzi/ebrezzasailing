source "https://rubygems.org"

# Core
gem "jekyll", "~> 4.4.1"

# Plugins utili
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"    # Genera feed RSS (utile anche se non lo usi subito)
  gem "jekyll-seo-tag"            # SEO tag automatici
end

# Per avviare il server su Windows
gem "webrick", "~> 1.8"

# Compatibilità Windows
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
  gem "wdm", "~> 0.1"
end
