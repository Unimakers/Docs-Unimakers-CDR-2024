#ifndef GEOMETRY_H
#define GEOMETRY_H

#include <cmath>

// Définition de la structure Vec2 représentant un vecteur en 2D
struct Vec2 {
    float x;
    float y;

    // Constructeurs
    Vec2() : x(0.0f), y(0.0f) {}
    Vec2(float _x, float _y) : x(_x), y(_y) {}

    // Méthodes pour effectuer des opérations vectorielles
    Vec2& add(const Vec2& other) {
        x += other.x;
        y += other.y;
        return *this;
    }

    Vec2& sub(const Vec2& other) {
        x -= other.x;
        y -= other.y;
        return *this;
    }

    Vec2& mult(float scalar) {
        x *= scalar;
        y *= scalar;
        return *this;
    }

    Vec2& div(float scalar) {
        if (scalar != 0.0f) {
            x /= scalar;
            y /= scalar;
        }
        return *this;
    }

    // Méthodes pour calculer la magnitude, le carré de la magnitude et l'angle du vecteur
    float mag() const {
        return std::sqrt(x * x + y * y);
    }

    float magSq() const {
        return x * x + y * y;
    }

    float heading() const {
        return std::atan2(y, x);
    }

    // Méthode pour normaliser le vecteur
    Vec2& normalize() {
        float m = mag();
        if (m != 0.0f) {
            div(m);
        }
        return *this;
    }
};

// Surcharge des opérateurs pour permettre une syntaxe plus naturelle
Vec2 operator+(const Vec2& a, const Vec2& b) {
    return Vec2(a.x + b.x, a.y + b.y);
}

Vec2 operator-(const Vec2& a, const Vec2& b) {
    return Vec2(a.x - b.x, a.y - b.y);
}

Vec2 operator*(const Vec2& vec, float scalar) {
    return Vec2(vec.x * scalar, vec.y * scalar);
}

Vec2 operator/(const Vec2& vec, float scalar) {
    if (scalar != 0.0f) {
        return Vec2(vec.x / scalar, vec.y / scalar);
    }
    return vec;
}

#endif // GEOMETRY_H
