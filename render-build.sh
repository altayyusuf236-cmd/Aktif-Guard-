#!/usr/bin/env bash
# Hata durumunda betiği durdur
set -o errexit

# Canvas için gerekli sistem kütüphanelerini kur
apt-get update && apt-get install -y \
  build-essential \
  libcairo2-dev \
  libpango1.0-dev \
  libjpeg-dev \
  libgif-dev \
  librsvg2-dev

# Canvas'ın hazır paket indirmesini engelle, kaynak koddan derle
npm install --build-from-source canvas

# Geri kalan paketleri yükle
npm install
