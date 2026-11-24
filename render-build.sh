#!/usr/bin/env bash
# Hata durumunda betiği durdur
set -o errexit

# Canvas için gerekli sistem bağımlılıklarını kur
apt-get update && apt-get install -y \
  build-essential \
  libcairo2-dev \
  libpango1.0-dev \
  libjpeg-dev \
  libgif-dev \
  librsvg2-dev

# Proje paketlerini yükle
npm install
