# Generated by Django 3.1 on 2020-08-09 02:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comuna',
            fields=[
                ('number', models.CharField(max_length=5, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=25)),
            ],
        ),
        migrations.CreateModel(
            name='Region',
            fields=[
                ('number', models.CharField(max_length=2, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Provincia',
            fields=[
                ('number', models.CharField(max_length=3, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=25)),
                ('region', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='provincias', to='farmacias_app.region')),
            ],
        ),
        migrations.CreateModel(
            name='Farmacia',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('direccion', models.CharField(max_length=150)),
                ('apertura', models.DateTimeField()),
                ('cierre', models.DateTimeField()),
                ('telefono', models.CharField(max_length=40, null=True)),
                ('lat', models.DecimalField(decimal_places=7, max_digits=9, null=True)),
                ('lng', models.DecimalField(decimal_places=7, max_digits=9, null=True)),
                ('comuna', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='farmacias_app.comuna')),
            ],
        ),
        migrations.AddField(
            model_name='comuna',
            name='provincia',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comunas', to='farmacias_app.provincia'),
        ),
    ]
