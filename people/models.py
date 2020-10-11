from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class Person(models.Model):
    name = models.CharField(max_length=40)
    surname = models.CharField(max_length=50)
    phone_number = PhoneNumberField()
    email = models.EmailField(default='',max_length=254, unique=True)
    description = models.CharField(max_length=200)

    def __str__(self):
        return '{} {}'.format(self.name, self.surname)
