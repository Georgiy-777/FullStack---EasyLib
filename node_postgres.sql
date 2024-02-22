PGDMP                         |            node_postgres    13.14    13.14     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16447    node_postgres    DATABASE     m   CREATE DATABASE node_postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Ukrainian_Ukraine.1251';
    DROP DATABASE node_postgres;
                postgres    false            �            1259    16450    books    TABLE     x  CREATE TABLE public.books (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    author character varying(255) NOT NULL,
    image bytea,
    description text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    size integer,
    mimetype character varying(255),
    path character varying(255),
    filename character varying(255)
);
    DROP TABLE public.books;
       public         heap    postgres    false            �            1259    16448    books_id_seq    SEQUENCE     �   CREATE SEQUENCE public.books_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.books_id_seq;
       public          postgres    false    201            �           0    0    books_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.books_id_seq OWNED BY public.books.id;
          public          postgres    false    200            #           2604    16453    books id    DEFAULT     d   ALTER TABLE ONLY public.books ALTER COLUMN id SET DEFAULT nextval('public.books_id_seq'::regclass);
 7   ALTER TABLE public.books ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    201    200    201            �          0    16450    books 
   TABLE DATA           r   COPY public.books (id, title, author, image, description, created_at, size, mimetype, path, filename) FROM stdin;
    public          postgres    false    201   x       �           0    0    books_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.books_id_seq', 22, true);
          public          postgres    false    200            &           2606    16459    books books_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.books DROP CONSTRAINT books_pkey;
       public            postgres    false    201            �   �  x��TAn�0<ۯ�8���p�cP�4@��h��FZK�R������~���K:��}C�@gwf�,V����!��^���X�[���z�=~�][h�)	�v�+�5}�n�^ٓ��-�Dܵ<Y�v ���'��܁�a�u��W�>i�I(� 06f��X���}c.�������4�����J���O�9�������&�H4sU�B���!Q��$�`����؋��R��;��ё�&D!�= ��I2�(f(�gC�(a�H|��x��B)v��x�ߵ�PL&�N�4���Ɩ�>��m�<��Bg���[���]��wg�-T]���m}k�@_��O���c��j����vQK�����ט6�ba�	A�]]���`HM��^���B09?��je������Ql/0��c:�pi��R&T��g�fD�3�3�M����4XLlJk�R1v�S��9lӈ�%hX��n BNw���l�)��h-]ue�9����1nǭN�3<6�\���0P=fht�WƤ~�,1x�è��ڸ������Ө��q��9��j� �G�:��&W�����H�+���fŪ؜��������ju�Y/���m�����?/������{?���w�z[������}[l..��.�l/������q9�����	]     