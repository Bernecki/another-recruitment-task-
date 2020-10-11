from rest_framework import serializers
from .models import Person


class PersonSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Person
        fields = ['id', 'name', 'surname', 'phone_number', 'email', 'description']