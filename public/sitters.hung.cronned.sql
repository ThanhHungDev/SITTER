--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: activity_experiences; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE activity_experiences (
    id integer NOT NULL,
    user_id integer NOT NULL,
    experience_id integer NOT NULL,
    deleted boolean DEFAULT false NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.activity_experiences OWNER TO postgres;

--
-- Name: activity_experiences_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE activity_experiences_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.activity_experiences_id_seq OWNER TO postgres;

--
-- Name: activity_experiences_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE activity_experiences_id_seq OWNED BY activity_experiences.id;


--
-- Name: activity_skills; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE activity_skills (
    id integer NOT NULL,
    user_id integer NOT NULL,
    skill_id integer NOT NULL,
    deleted boolean DEFAULT false NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.activity_skills OWNER TO postgres;

--
-- Name: activity_skills_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE activity_skills_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.activity_skills_id_seq OWNER TO postgres;

--
-- Name: activity_skills_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE activity_skills_id_seq OWNED BY activity_skills.id;


--
-- Name: bookings; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE bookings (
    id integer NOT NULL,
    employer_id integer NOT NULL,
    sitter_id integer NOT NULL,
    status integer DEFAULT 0 NOT NULL,
    sitter_accept integer DEFAULT 0 NOT NULL,
    employer_accept integer DEFAULT 0 NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    date_cancel timestamp(0) without time zone,
    cron_filter integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.bookings OWNER TO postgres;

--
-- Name: bookings_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE bookings_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.bookings_id_seq OWNER TO postgres;

--
-- Name: bookings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE bookings_id_seq OWNED BY bookings.id;


--
-- Name: date_bookings; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE date_bookings (
    id bigint NOT NULL,
    booking_id integer NOT NULL,
    work_date date,
    start time(0) without time zone,
    finish time(0) without time zone,
    type character varying(125),
    salary character varying(100) DEFAULT '0'::character varying NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.date_bookings OWNER TO postgres;

--
-- Name: date_bookings_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE date_bookings_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.date_bookings_id_seq OWNER TO postgres;

--
-- Name: date_bookings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE date_bookings_id_seq OWNED BY date_bookings.id;


--
-- Name: employer_profiles; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE employer_profiles (
    id integer NOT NULL,
    user_id integer NOT NULL,
    type_upload integer,
    nick_name character varying(255),
    note text,
    remark text,
    publish boolean DEFAULT true NOT NULL,
    deleted boolean DEFAULT false NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.employer_profiles OWNER TO postgres;

--
-- Name: employer_profiles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE employer_profiles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.employer_profiles_id_seq OWNER TO postgres;

--
-- Name: employer_profiles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE employer_profiles_id_seq OWNED BY employer_profiles.id;


--
-- Name: experiences; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE experiences (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    type integer DEFAULT 1 NOT NULL,
    remark text,
    deleted boolean DEFAULT false NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.experiences OWNER TO postgres;

--
-- Name: experiences_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE experiences_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.experiences_id_seq OWNER TO postgres;

--
-- Name: experiences_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE experiences_id_seq OWNED BY experiences.id;


--
-- Name: failed_jobs; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE failed_jobs (
    id bigint NOT NULL,
    connection text NOT NULL,
    queue text NOT NULL,
    payload text NOT NULL,
    exception text NOT NULL,
    failed_at timestamp(0) without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.failed_jobs OWNER TO postgres;

--
-- Name: failed_jobs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE failed_jobs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.failed_jobs_id_seq OWNER TO postgres;

--
-- Name: failed_jobs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE failed_jobs_id_seq OWNED BY failed_jobs.id;


--
-- Name: families; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE families (
    id integer NOT NULL,
    id_profile integer NOT NULL,
    first_name character varying(255),
    last_name character varying(255),
    first_name_furigana character varying(255),
    last_name_furigana character varying(255),
    birth_date date,
    gender integer DEFAULT 0 NOT NULL,
    allergic boolean DEFAULT false NOT NULL,
    chronic boolean DEFAULT false NOT NULL,
    type integer,
    remark character varying(255),
    deleted boolean DEFAULT false NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    allergic_note text,
    chronic_note text
);


ALTER TABLE public.families OWNER TO postgres;

--
-- Name: families_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE families_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.families_id_seq OWNER TO postgres;

--
-- Name: families_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE families_id_seq OWNED BY families.id;


--
-- Name: galaries; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE galaries (
    id integer NOT NULL,
    user_id integer NOT NULL,
    url character varying(255),
    type integer,
    deleted boolean DEFAULT false NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    name character varying(255),
    path character varying(255)
);


ALTER TABLE public.galaries OWNER TO postgres;

--
-- Name: galaries_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE galaries_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galaries_id_seq OWNER TO postgres;

--
-- Name: galaries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE galaries_id_seq OWNED BY galaries.id;


--
-- Name: migrations; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE migrations (
    id integer NOT NULL,
    migration character varying(255) NOT NULL,
    batch integer NOT NULL
);


ALTER TABLE public.migrations OWNER TO postgres;

--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.migrations_id_seq OWNER TO postgres;

--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE migrations_id_seq OWNED BY migrations.id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE orders (
    id bigint NOT NULL,
    booking_id integer NOT NULL,
    salary character varying(100) DEFAULT '0'::character varying NOT NULL,
    diff_time character varying(100) DEFAULT '0'::character varying NOT NULL,
    price character varying(100) DEFAULT '0'::character varying NOT NULL,
    vat character varying(100) DEFAULT '0'::character varying NOT NULL,
    fee_stripe character varying(100) DEFAULT '0'::character varying NOT NULL,
    profit character varying(100) DEFAULT '0'::character varying NOT NULL,
    status integer DEFAULT 0 NOT NULL,
    note text,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE orders_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_id_seq OWNER TO postgres;

--
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE orders_id_seq OWNED BY orders.id;


--
-- Name: password_reset; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE password_reset (
    id integer NOT NULL,
    user_id integer NOT NULL,
    verify_code character varying(255) NOT NULL,
    date_send timestamp(0) without time zone,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.password_reset OWNER TO postgres;

--
-- Name: password_reset_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE password_reset_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.password_reset_id_seq OWNER TO postgres;

--
-- Name: password_reset_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE password_reset_id_seq OWNED BY password_reset.id;


--
-- Name: payments; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE payments (
    id bigint NOT NULL,
    user_id integer NOT NULL,
    order_id integer NOT NULL,
    stripe_payment character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    is_payout integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.payments OWNER TO postgres;

--
-- Name: payments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE payments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.payments_id_seq OWNER TO postgres;

--
-- Name: payments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE payments_id_seq OWNED BY payments.id;


--
-- Name: payouts; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE payouts (
    id bigint NOT NULL,
    stripe_tranfer character varying(255),
    status integer DEFAULT 0 NOT NULL,
    note character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    payment_id integer
);


ALTER TABLE public.payouts OWNER TO postgres;

--
-- Name: payouts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE payouts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.payouts_id_seq OWNER TO postgres;

--
-- Name: payouts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE payouts_id_seq OWNED BY payouts.id;


--
-- Name: refunds; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE refunds (
    id bigint NOT NULL,
    type integer,
    amount character varying(100),
    reason character varying(100),
    refund_nf character varying(255),
    note character varying(255),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.refunds OWNER TO postgres;

--
-- Name: refunds_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE refunds_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.refunds_id_seq OWNER TO postgres;

--
-- Name: refunds_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE refunds_id_seq OWNED BY refunds.id;


--
-- Name: salaries; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE salaries (
    id integer NOT NULL,
    user_id integer NOT NULL,
    salary character varying(255),
    type integer,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.salaries OWNER TO postgres;

--
-- Name: salaries_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE salaries_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.salaries_id_seq OWNER TO postgres;

--
-- Name: salaries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE salaries_id_seq OWNED BY salaries.id;


--
-- Name: schedules; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE schedules (
    id integer NOT NULL,
    user_id integer NOT NULL,
    work_date date,
    start time(0) without time zone,
    finish time(0) without time zone,
    overnight boolean DEFAULT false NOT NULL,
    type character varying(125),
    status integer DEFAULT 0 NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.schedules OWNER TO postgres;

--
-- Name: schedules_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE schedules_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.schedules_id_seq OWNER TO postgres;

--
-- Name: schedules_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE schedules_id_seq OWNED BY schedules.id;


--
-- Name: sitter_profiles; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE sitter_profiles (
    id integer NOT NULL,
    user_id integer NOT NULL,
    type_upload integer NOT NULL,
    contact_name character varying(255),
    contact_address character varying(255),
    contact_phone character varying(20),
    contact_relationship character varying(255),
    publish boolean DEFAULT false NOT NULL,
    deleted boolean DEFAULT false NOT NULL,
    remark text,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.sitter_profiles OWNER TO postgres;

--
-- Name: sitter_profiles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE sitter_profiles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sitter_profiles_id_seq OWNER TO postgres;

--
-- Name: sitter_profiles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE sitter_profiles_id_seq OWNED BY sitter_profiles.id;


--
-- Name: sitter_reviews; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE sitter_reviews (
    id integer NOT NULL,
    sitter_id integer NOT NULL,
    employer_id integer NOT NULL,
    comment text NOT NULL,
    rate double precision NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.sitter_reviews OWNER TO postgres;

--
-- Name: sitter_reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE sitter_reviews_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sitter_reviews_id_seq OWNER TO postgres;

--
-- Name: sitter_reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE sitter_reviews_id_seq OWNED BY sitter_reviews.id;


--
-- Name: sitters; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE sitters (
    id integer NOT NULL,
    user_id integer NOT NULL,
    age character varying(5),
    pref character varying(255),
    city character varying(255),
    kid_age_start integer,
    kid_qty integer,
    exp_parenting boolean,
    exp_sitter boolean,
    time_support time(0) without time zone,
    self_introduce text,
    service_introduce text,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    kid_age_end integer,
    title text DEFAULT '☆笑顔と個性を大切にサポートいたします☆ダンス・ストレッチ指導経験あり。'::text NOT NULL,
    exp_kid_qty integer
);


ALTER TABLE public.sitters OWNER TO postgres;

--
-- Name: sitters_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE sitters_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sitters_id_seq OWNER TO postgres;

--
-- Name: sitters_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE sitters_id_seq OWNED BY sitters.id;


--
-- Name: skills; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE skills (
    id integer NOT NULL,
    name character varying(255),
    remark text,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.skills OWNER TO postgres;

--
-- Name: skills_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE skills_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.skills_id_seq OWNER TO postgres;

--
-- Name: skills_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE skills_id_seq OWNED BY skills.id;


--
-- Name: token_refeshes; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE token_refeshes (
    id integer NOT NULL,
    user_id integer NOT NULL,
    token character varying(255),
    detect text,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.token_refeshes OWNER TO postgres;

--
-- Name: token_refeshes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE token_refeshes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.token_refeshes_id_seq OWNER TO postgres;

--
-- Name: token_refeshes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE token_refeshes_id_seq OWNED BY token_refeshes.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE users (
    id integer NOT NULL,
    avatar character varying(255),
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    first_name character varying(255),
    last_name character varying(255),
    first_name_furigana character varying(255),
    last_name_furigana character varying(255),
    birth_date date NOT NULL,
    gender integer DEFAULT 0 NOT NULL,
    post_code character varying(20),
    pref character varying(100),
    town character varying(100),
    address character varying(255),
    phone character varying(20),
    role_id integer NOT NULL,
    online boolean DEFAULT false NOT NULL,
    socket_id character varying(255),
    token_verify character varying(255),
    active boolean DEFAULT false NOT NULL,
    deleted boolean DEFAULT false NOT NULL,
    remember_token character varying(100),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone,
    admin_confirm integer DEFAULT 0,
    stripe_account_id character varying(255),
    stripe_active boolean DEFAULT false NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- Name: verify_emails; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE verify_emails (
    id integer NOT NULL,
    user_id integer NOT NULL,
    token_verify character varying(255) NOT NULL,
    email_verified_at timestamp(0) without time zone,
    email_expire_at timestamp(0) without time zone NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.verify_emails OWNER TO postgres;

--
-- Name: verify_emails_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE verify_emails_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.verify_emails_id_seq OWNER TO postgres;

--
-- Name: verify_emails_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE verify_emails_id_seq OWNED BY verify_emails.id;


--
-- Name: verify_rates; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE verify_rates (
    id integer NOT NULL,
    user_id integer NOT NULL,
    sitter_id integer NOT NULL,
    token character varying(255) NOT NULL,
    verified_at timestamp(0) without time zone,
    expire_at timestamp(0) without time zone NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.verify_rates OWNER TO postgres;

--
-- Name: verify_rates_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE verify_rates_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.verify_rates_id_seq OWNER TO postgres;

--
-- Name: verify_rates_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE verify_rates_id_seq OWNED BY verify_rates.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activity_experiences ALTER COLUMN id SET DEFAULT nextval('activity_experiences_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activity_skills ALTER COLUMN id SET DEFAULT nextval('activity_skills_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY bookings ALTER COLUMN id SET DEFAULT nextval('bookings_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY date_bookings ALTER COLUMN id SET DEFAULT nextval('date_bookings_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY employer_profiles ALTER COLUMN id SET DEFAULT nextval('employer_profiles_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY experiences ALTER COLUMN id SET DEFAULT nextval('experiences_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY failed_jobs ALTER COLUMN id SET DEFAULT nextval('failed_jobs_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY families ALTER COLUMN id SET DEFAULT nextval('families_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY galaries ALTER COLUMN id SET DEFAULT nextval('galaries_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY migrations ALTER COLUMN id SET DEFAULT nextval('migrations_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY orders ALTER COLUMN id SET DEFAULT nextval('orders_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY password_reset ALTER COLUMN id SET DEFAULT nextval('password_reset_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY payments ALTER COLUMN id SET DEFAULT nextval('payments_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY payouts ALTER COLUMN id SET DEFAULT nextval('payouts_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY refunds ALTER COLUMN id SET DEFAULT nextval('refunds_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY salaries ALTER COLUMN id SET DEFAULT nextval('salaries_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY schedules ALTER COLUMN id SET DEFAULT nextval('schedules_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY sitter_profiles ALTER COLUMN id SET DEFAULT nextval('sitter_profiles_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY sitter_reviews ALTER COLUMN id SET DEFAULT nextval('sitter_reviews_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY sitters ALTER COLUMN id SET DEFAULT nextval('sitters_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY skills ALTER COLUMN id SET DEFAULT nextval('skills_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY token_refeshes ALTER COLUMN id SET DEFAULT nextval('token_refeshes_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY verify_emails ALTER COLUMN id SET DEFAULT nextval('verify_emails_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY verify_rates ALTER COLUMN id SET DEFAULT nextval('verify_rates_id_seq'::regclass);


--
-- Data for Name: activity_experiences; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY activity_experiences (id, user_id, experience_id, deleted, created_at, updated_at) FROM stdin;
27	23	1	f	2020-07-01 01:51:11	2020-07-01 01:51:11
28	23	2	f	2020-07-01 01:51:11	2020-07-01 01:51:11
29	23	3	f	2020-07-01 01:51:11	2020-07-01 01:51:11
30	23	10	f	2020-07-01 01:51:11	2020-07-01 01:51:11
31	24	1	f	2020-07-01 01:54:24	2020-07-01 01:54:24
32	24	2	f	2020-07-01 01:54:24	2020-07-01 01:54:24
33	24	4	f	2020-07-01 01:54:24	2020-07-01 01:54:24
34	24	7	f	2020-07-01 01:54:24	2020-07-01 01:54:24
35	24	10	f	2020-07-01 01:54:24	2020-07-01 01:54:24
36	27	3	f	2020-07-03 05:33:59	2020-07-03 05:33:59
37	27	6	f	2020-07-03 05:33:59	2020-07-03 05:33:59
38	27	10	f	2020-07-03 05:33:59	2020-07-03 05:33:59
39	29	1	f	2020-07-04 06:17:14	2020-07-04 06:17:14
40	29	2	f	2020-07-04 06:17:14	2020-07-04 06:17:14
41	29	5	f	2020-07-04 06:17:14	2020-07-04 06:17:14
42	29	6	f	2020-07-04 06:17:14	2020-07-04 06:17:14
43	29	7	f	2020-07-04 06:17:14	2020-07-04 06:17:14
44	29	10	f	2020-07-04 06:17:14	2020-07-04 06:17:14
45	31	1	f	2020-07-06 07:27:13	2020-07-06 07:27:13
46	31	3	f	2020-07-06 07:27:13	2020-07-06 07:27:13
47	31	7	f	2020-07-06 07:27:13	2020-07-06 07:27:13
48	31	10	f	2020-07-06 07:27:13	2020-07-06 07:27:13
49	34	2	f	2020-07-10 05:38:01	2020-07-10 05:38:01
50	34	3	f	2020-07-10 05:38:01	2020-07-10 05:38:01
51	34	10	f	2020-07-10 05:38:01	2020-07-10 05:38:01
52	36	1	f	2020-07-10 07:27:09	2020-07-10 07:27:09
53	36	4	f	2020-07-10 07:27:09	2020-07-10 07:27:09
54	36	5	f	2020-07-10 07:27:09	2020-07-10 07:27:09
55	36	6	f	2020-07-10 07:27:09	2020-07-10 07:27:09
56	36	7	f	2020-07-10 07:27:09	2020-07-10 07:27:09
57	36	10	f	2020-07-10 07:27:09	2020-07-10 07:27:09
61	49	1	f	2020-07-21 07:11:33	2020-07-21 07:11:33
62	47	1	f	2020-07-22 00:05:05	2020-07-22 00:05:05
63	47	6	f	2020-07-22 00:05:05	2020-07-22 00:05:05
64	47	7	f	2020-07-22 00:05:05	2020-07-22 00:05:05
65	50	3	f	2020-07-22 00:26:11	2020-07-22 00:26:11
66	50	6	f	2020-07-22 00:26:11	2020-07-22 00:26:11
67	51	1	f	2020-07-22 05:15:55	2020-07-22 05:15:55
68	51	4	f	2020-07-22 05:15:55	2020-07-22 05:15:55
69	38	3	f	2020-07-27 07:33:24	2020-07-27 07:33:24
70	38	6	f	2020-07-27 07:33:24	2020-07-27 07:33:24
71	38	7	f	2020-07-27 07:33:24	2020-07-27 07:33:24
72	53	1	f	2020-07-29 04:57:04	2020-07-29 04:57:04
73	53	4	f	2020-07-29 04:57:04	2020-07-29 04:57:04
74	55	4	f	2020-07-30 03:09:52	2020-07-30 03:09:52
75	55	7	f	2020-07-30 03:09:52	2020-07-30 03:09:52
76	56	1	f	2020-07-30 04:31:08	2020-07-30 04:31:08
77	56	2	f	2020-07-30 04:31:08	2020-07-30 04:31:08
78	57	1	f	2020-07-30 05:12:50	2020-07-30 05:12:50
84	58	3	f	2020-07-30 05:17:24	2020-07-30 05:17:24
85	58	6	f	2020-07-30 05:17:24	2020-07-30 05:17:24
86	58	9	f	2020-07-30 05:17:24	2020-07-30 05:17:24
87	58	10	f	2020-07-30 05:17:24	2020-07-30 05:17:24
88	60	1	f	2020-07-30 07:16:15	2020-07-30 07:16:15
89	70	1	f	2020-08-03 08:12:21	2020-08-03 08:12:21
90	72	2	f	2020-09-18 07:45:54	2020-09-18 07:45:54
91	72	6	f	2020-09-18 07:45:54	2020-09-18 07:45:54
92	72	10	f	2020-09-18 07:45:54	2020-09-18 07:45:54
\.


--
-- Name: activity_experiences_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('activity_experiences_id_seq', 92, true);


--
-- Data for Name: activity_skills; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY activity_skills (id, user_id, skill_id, deleted, created_at, updated_at) FROM stdin;
152	23	1	f	2020-07-01 01:51:11	2020-07-01 01:51:11
153	23	2	f	2020-07-01 01:51:11	2020-07-01 01:51:11
154	23	6	f	2020-07-01 01:51:11	2020-07-01 01:51:11
155	23	7	f	2020-07-01 01:51:11	2020-07-01 01:51:11
156	23	12	f	2020-07-01 01:51:11	2020-07-01 01:51:11
157	23	13	f	2020-07-01 01:51:11	2020-07-01 01:51:11
158	23	14	f	2020-07-01 01:51:11	2020-07-01 01:51:11
2514	29	1	f	2020-09-04 02:37:49	2020-09-04 02:37:49
2515	29	2	f	2020-09-04 02:37:49	2020-09-04 02:37:49
2516	29	3	f	2020-09-04 02:37:49	2020-09-04 02:37:49
2517	29	4	f	2020-09-04 02:37:49	2020-09-04 02:37:49
2518	29	5	f	2020-09-04 02:37:49	2020-09-04 02:37:49
2519	29	6	f	2020-09-04 02:37:49	2020-09-04 02:37:49
2520	29	7	f	2020-09-04 02:37:49	2020-09-04 02:37:49
2521	29	8	f	2020-09-04 02:37:49	2020-09-04 02:37:49
2522	29	9	f	2020-09-04 02:37:49	2020-09-04 02:37:49
2523	29	12	f	2020-09-04 02:37:49	2020-09-04 02:37:49
1206	51	1	f	2020-07-22 05:32:21	2020-07-22 05:32:21
1207	51	2	f	2020-07-22 05:32:21	2020-07-22 05:32:21
1208	51	8	f	2020-07-22 05:32:21	2020-07-22 05:32:21
1209	51	9	f	2020-07-22 05:32:21	2020-07-22 05:32:21
1210	51	10	f	2020-07-22 05:32:21	2020-07-22 05:32:21
1211	51	13	f	2020-07-22 05:32:21	2020-07-22 05:32:21
1212	51	15	f	2020-07-22 05:32:21	2020-07-22 05:32:21
1213	51	19	f	2020-07-22 05:32:21	2020-07-22 05:32:21
2524	29	13	f	2020-09-04 02:37:49	2020-09-04 02:37:49
2525	29	14	f	2020-09-04 02:37:49	2020-09-04 02:37:49
2526	29	15	f	2020-09-04 02:37:49	2020-09-04 02:37:49
1214	51	20	f	2020-07-22 05:32:21	2020-07-22 05:32:21
2527	29	17	f	2020-09-04 02:37:49	2020-09-04 02:37:49
2528	29	18	f	2020-09-04 02:37:49	2020-09-04 02:37:49
2529	29	19	f	2020-09-04 02:37:49	2020-09-04 02:37:49
2530	29	22	f	2020-09-04 02:37:49	2020-09-04 02:37:49
2531	29	23	f	2020-09-04 02:37:49	2020-09-04 02:37:49
2532	29	24	f	2020-09-04 02:37:49	2020-09-04 02:37:49
2533	29	25	f	2020-09-04 02:37:49	2020-09-04 02:37:49
2609	24	1	f	2020-09-11 06:40:57	2020-09-11 06:40:57
2610	24	7	f	2020-09-11 06:40:57	2020-09-11 06:40:57
2611	24	8	f	2020-09-11 06:40:57	2020-09-11 06:40:57
2612	24	15	f	2020-09-11 06:40:57	2020-09-11 06:40:57
2613	24	20	f	2020-09-11 06:40:57	2020-09-11 06:40:57
2614	24	24	f	2020-09-11 06:40:57	2020-09-11 06:40:57
2615	24	25	f	2020-09-11 06:40:57	2020-09-11 06:40:57
1215	51	21	f	2020-07-22 05:32:21	2020-07-22 05:32:21
1216	34	1	f	2020-07-27 00:23:24	2020-07-27 00:23:24
1217	34	6	f	2020-07-27 00:23:24	2020-07-27 00:23:24
1218	34	8	f	2020-07-27 00:23:24	2020-07-27 00:23:24
1219	34	14	f	2020-07-27 00:23:24	2020-07-27 00:23:24
1220	34	17	f	2020-07-27 00:23:24	2020-07-27 00:23:24
1221	34	22	f	2020-07-27 00:23:24	2020-07-27 00:23:24
1222	34	24	f	2020-07-27 00:23:24	2020-07-27 00:23:24
1223	34	25	f	2020-07-27 00:23:24	2020-07-27 00:23:24
1224	34	26	f	2020-07-27 00:23:24	2020-07-27 00:23:24
1406	55	2	f	2020-07-30 03:09:52	2020-07-30 03:09:52
1407	55	6	f	2020-07-30 03:09:52	2020-07-30 03:09:52
1408	55	7	f	2020-07-30 03:09:52	2020-07-30 03:09:52
1139	49	1	f	2020-07-21 07:11:33	2020-07-21 07:11:33
1140	49	2	f	2020-07-21 07:11:33	2020-07-21 07:11:33
1141	49	8	f	2020-07-21 07:11:33	2020-07-21 07:11:33
1142	49	9	f	2020-07-21 07:11:33	2020-07-21 07:11:33
1143	49	11	f	2020-07-21 07:11:33	2020-07-21 07:11:33
1144	49	13	f	2020-07-21 07:11:33	2020-07-21 07:11:33
1409	55	12	f	2020-07-30 03:09:52	2020-07-30 03:09:52
1146	49	18	f	2020-07-21 07:11:33	2020-07-21 07:11:33
1147	49	19	f	2020-07-21 07:11:33	2020-07-21 07:11:33
1148	49	20	f	2020-07-21 07:11:33	2020-07-21 07:11:33
1149	49	21	f	2020-07-21 07:11:33	2020-07-21 07:11:33
1007	27	2	f	2020-07-20 08:15:13	2020-07-20 08:15:13
1008	27	5	f	2020-07-20 08:15:13	2020-07-20 08:15:13
1009	27	8	f	2020-07-20 08:15:13	2020-07-20 08:15:13
1010	27	14	f	2020-07-20 08:15:13	2020-07-20 08:15:13
1012	27	24	f	2020-07-20 08:15:13	2020-07-20 08:15:13
1450	56	1	f	2020-07-30 04:56:22	2020-07-30 04:56:22
1451	56	2	f	2020-07-30 04:56:22	2020-07-30 04:56:22
1452	56	3	f	2020-07-30 04:56:22	2020-07-30 04:56:22
1453	56	4	f	2020-07-30 04:56:22	2020-07-30 04:56:22
1454	56	5	f	2020-07-30 04:56:22	2020-07-30 04:56:22
1455	56	6	f	2020-07-30 04:56:22	2020-07-30 04:56:22
1456	56	7	f	2020-07-30 04:56:22	2020-07-30 04:56:22
1457	56	8	f	2020-07-30 04:56:22	2020-07-30 04:56:22
1458	56	9	f	2020-07-30 04:56:22	2020-07-30 04:56:22
1459	56	10	f	2020-07-30 04:56:22	2020-07-30 04:56:22
1460	56	11	f	2020-07-30 04:56:22	2020-07-30 04:56:22
1013	27	25	f	2020-07-20 08:15:13	2020-07-20 08:15:13
1150	49	22	f	2020-07-21 07:11:33	2020-07-21 07:11:33
1151	47	1	f	2020-07-22 00:05:05	2020-07-22 00:05:05
1152	47	2	f	2020-07-22 00:05:05	2020-07-22 00:05:05
1153	47	3	f	2020-07-22 00:05:05	2020-07-22 00:05:05
1154	47	4	f	2020-07-22 00:05:05	2020-07-22 00:05:05
1155	47	5	f	2020-07-22 00:05:05	2020-07-22 00:05:05
1156	47	6	f	2020-07-22 00:05:05	2020-07-22 00:05:05
1157	47	11	f	2020-07-22 00:05:05	2020-07-22 00:05:05
1158	47	12	f	2020-07-22 00:05:05	2020-07-22 00:05:05
1159	47	13	f	2020-07-22 00:05:05	2020-07-22 00:05:05
1160	47	14	f	2020-07-22 00:05:05	2020-07-22 00:05:05
1161	47	17	f	2020-07-22 00:05:05	2020-07-22 00:05:05
1162	47	18	f	2020-07-22 00:05:05	2020-07-22 00:05:05
1163	47	24	f	2020-07-22 00:05:05	2020-07-22 00:05:05
1164	47	25	f	2020-07-22 00:05:05	2020-07-22 00:05:05
1477	57	1	f	2020-07-30 05:30:35	2020-07-30 05:30:35
1478	57	2	f	2020-07-30 05:30:35	2020-07-30 05:30:35
1479	57	3	f	2020-07-30 05:30:35	2020-07-30 05:30:35
1480	57	4	f	2020-07-30 05:30:35	2020-07-30 05:30:35
1481	57	5	f	2020-07-30 05:30:35	2020-07-30 05:30:35
1681	70	1	f	2020-08-03 08:12:21	2020-08-03 08:12:21
1682	70	2	f	2020-08-03 08:12:21	2020-08-03 08:12:21
1683	70	3	f	2020-08-03 08:12:21	2020-08-03 08:12:21
1684	70	4	f	2020-08-03 08:12:21	2020-08-03 08:12:21
1685	70	5	f	2020-08-03 08:12:21	2020-08-03 08:12:21
1686	70	6	f	2020-08-03 08:12:21	2020-08-03 08:12:21
1687	70	7	f	2020-08-03 08:12:21	2020-08-03 08:12:21
1688	70	8	f	2020-08-03 08:12:21	2020-08-03 08:12:21
1689	70	9	f	2020-08-03 08:12:21	2020-08-03 08:12:21
1690	70	10	f	2020-08-03 08:12:21	2020-08-03 08:12:21
1691	70	11	f	2020-08-03 08:12:21	2020-08-03 08:12:21
1882	38	2	f	2020-08-12 05:22:05	2020-08-12 05:22:05
1883	38	6	f	2020-08-12 05:22:05	2020-08-12 05:22:05
2459	53	1	f	2020-08-31 05:20:58	2020-08-31 05:20:58
2460	53	2	f	2020-08-31 05:20:58	2020-08-31 05:20:58
2461	53	3	f	2020-08-31 05:20:58	2020-08-31 05:20:58
2462	53	5	f	2020-08-31 05:20:58	2020-08-31 05:20:58
2463	53	7	f	2020-08-31 05:20:58	2020-08-31 05:20:58
1341	50	2	f	2020-07-28 00:22:55	2020-07-28 00:22:55
1342	50	7	f	2020-07-28 00:22:55	2020-07-28 00:22:55
1343	50	8	f	2020-07-28 00:22:55	2020-07-28 00:22:55
1344	50	24	f	2020-07-28 00:22:55	2020-07-28 00:22:55
1353	31	8	f	2020-07-28 01:03:22	2020-07-28 01:03:22
1354	31	9	f	2020-07-28 01:03:22	2020-07-28 01:03:22
1355	31	14	f	2020-07-28 01:03:22	2020-07-28 01:03:22
1356	31	15	f	2020-07-28 01:03:22	2020-07-28 01:03:22
1357	31	19	f	2020-07-28 01:03:22	2020-07-28 01:03:22
1358	31	20	f	2020-07-28 01:03:22	2020-07-28 01:03:22
1359	31	24	f	2020-07-28 01:03:22	2020-07-28 01:03:22
1360	31	25	f	2020-07-28 01:03:22	2020-07-28 01:03:22
2464	53	8	f	2020-08-31 05:20:58	2020-08-31 05:20:58
2465	53	9	f	2020-08-31 05:20:58	2020-08-31 05:20:58
2466	53	10	f	2020-08-31 05:20:58	2020-08-31 05:20:58
1884	38	7	f	2020-08-12 05:22:05	2020-08-12 05:22:05
1885	38	8	f	2020-08-12 05:22:05	2020-08-12 05:22:05
1886	38	12	f	2020-08-12 05:22:05	2020-08-12 05:22:05
1887	38	14	f	2020-08-12 05:22:05	2020-08-12 05:22:05
1888	38	17	f	2020-08-12 05:22:05	2020-08-12 05:22:05
1889	38	19	f	2020-08-12 05:22:05	2020-08-12 05:22:05
1926	60	1	f	2020-08-12 05:36:24	2020-08-12 05:36:24
1927	60	2	f	2020-08-12 05:36:24	2020-08-12 05:36:24
1928	60	3	f	2020-08-12 05:36:24	2020-08-12 05:36:24
1929	60	4	f	2020-08-12 05:36:24	2020-08-12 05:36:24
1930	60	5	f	2020-08-12 05:36:24	2020-08-12 05:36:24
1931	60	6	f	2020-08-12 05:36:24	2020-08-12 05:36:24
1932	60	7	f	2020-08-12 05:36:24	2020-08-12 05:36:24
1933	60	8	f	2020-08-12 05:36:24	2020-08-12 05:36:24
1934	60	9	f	2020-08-12 05:36:24	2020-08-12 05:36:24
1935	60	10	f	2020-08-12 05:36:24	2020-08-12 05:36:24
1936	60	11	f	2020-08-12 05:36:24	2020-08-12 05:36:24
2467	53	11	f	2020-08-31 05:20:58	2020-08-31 05:20:58
2468	53	13	f	2020-08-31 05:20:58	2020-08-31 05:20:58
2469	53	14	f	2020-08-31 05:20:58	2020-08-31 05:20:58
2470	53	15	f	2020-08-31 05:20:58	2020-08-31 05:20:58
2471	53	17	f	2020-08-31 05:20:58	2020-08-31 05:20:58
2472	53	22	f	2020-08-31 05:20:58	2020-08-31 05:20:58
2473	53	23	f	2020-08-31 05:20:58	2020-08-31 05:20:58
1473	58	2	f	2020-07-30 05:17:24	2020-07-30 05:17:24
1474	58	14	f	2020-07-30 05:17:24	2020-07-30 05:17:24
1475	58	20	f	2020-07-30 05:17:24	2020-07-30 05:17:24
1476	58	25	f	2020-07-30 05:17:24	2020-07-30 05:17:24
2768	36	1	f	2020-09-17 08:16:10	2020-09-17 08:16:10
2769	36	2	f	2020-09-17 08:16:10	2020-09-17 08:16:10
2770	36	3	f	2020-09-17 08:16:10	2020-09-17 08:16:10
2771	36	5	f	2020-09-17 08:16:10	2020-09-17 08:16:10
2772	36	7	f	2020-09-17 08:16:10	2020-09-17 08:16:10
2773	36	8	f	2020-09-17 08:16:10	2020-09-17 08:16:10
2774	36	10	f	2020-09-17 08:16:10	2020-09-17 08:16:10
2775	36	11	f	2020-09-17 08:16:10	2020-09-17 08:16:10
2776	36	13	f	2020-09-17 08:16:10	2020-09-17 08:16:10
2777	36	15	f	2020-09-17 08:16:10	2020-09-17 08:16:10
2778	36	18	f	2020-09-17 08:16:10	2020-09-17 08:16:10
2779	36	20	f	2020-09-17 08:16:10	2020-09-17 08:16:10
2780	36	21	f	2020-09-17 08:16:10	2020-09-17 08:16:10
2781	36	22	f	2020-09-17 08:16:10	2020-09-17 08:16:10
2782	36	24	f	2020-09-17 08:16:10	2020-09-17 08:16:10
2783	36	25	f	2020-09-17 08:16:10	2020-09-17 08:16:10
2787	72	1	f	2020-09-18 07:51:45	2020-09-18 07:51:45
2788	72	2	f	2020-09-18 07:51:45	2020-09-18 07:51:45
2789	72	8	f	2020-09-18 07:51:45	2020-09-18 07:51:45
2790	72	14	f	2020-09-18 07:51:45	2020-09-18 07:51:45
\.


--
-- Name: activity_skills_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('activity_skills_id_seq', 2790, true);


--
-- Data for Name: bookings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY bookings (id, employer_id, sitter_id, status, sitter_accept, employer_accept, created_at, updated_at, date_cancel, cron_filter) FROM stdin;
1	37	36	1	1	1	2020-09-11 06:54:19	2020-09-15 04:53:04	\N	0
6	37	36	1	1	1	2020-09-15 04:57:17	2020-09-15 04:58:17	\N	0
8	37	36	1	1	1	2020-09-15 05:43:08	2020-09-15 06:24:10	\N	0
9	37	36	1	1	1	2020-09-15 07:05:46	2020-09-15 07:06:59	\N	0
10	37	36	1	1	1	2020-09-15 07:08:23	2020-09-15 07:12:16	\N	0
11	37	24	1	1	1	2020-09-15 07:22:27	2020-09-15 07:23:30	\N	0
12	37	24	0	0	1	2020-09-15 08:46:05	2020-09-16 07:49:26	\N	0
13	37	36	1	1	1	2020-09-16 08:36:37	2020-09-16 08:51:00	\N	0
2	22	24	1	1	1	2020-09-11 06:55:33	2020-09-23 08:37:01	\N	1
15	26	72	1	1	1	2020-09-18 08:22:27	2020-09-23 08:37:01	\N	1
3	22	24	1	1	1	2020-09-11 08:57:15	2020-09-23 08:37:01	\N	1
4	37	29	0	0	1	2020-09-15 00:14:50	2020-09-23 08:37:01	\N	1
7	25	26	0	0	0	2020-09-15 05:01:02	2020-09-23 08:37:01	\N	1
14	26	72	1	1	1	2020-09-18 07:53:14	2020-09-23 08:37:01	\N	1
5	22	24	0	0	1	2020-09-15 00:49:25	2020-09-24 08:01:27	\N	1
\.


--
-- Name: bookings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('bookings_id_seq', 15, true);


--
-- Data for Name: date_bookings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY date_bookings (id, booking_id, work_date, start, finish, type, salary, created_at, updated_at) FROM stdin;
23	14	2020-09-20	09:30:00	11:00:00	2	1100	\N	\N
5	2	2020-09-17	13:30:00	23:00:00	2	2700	\N	\N
24	15	2020-09-21	07:00:00	10:00:00	2	1100	\N	\N
26	5	2020-09-25	00:30:00	07:00:00	1	2600	\N	\N
6	3	2020-09-15	00:30:00	11:00:00	2	2700	\N	\N
8	4	2020-09-16	09:00:00	17:30:00	2	1500	\N	\N
10	1	2020-09-19	11:00:00	18:00:00	2	2500	\N	\N
11	6	2020-09-16	15:00:00	20:00:00	2	2500	\N	\N
12	7	2020-09-15	06:30:00	10:30:00	2	2300	\N	\N
14	8	2020-09-16	12:00:00	18:00:00	,2,	2500	\N	\N
15	9	2020-09-16	07:30:00	17:00:00	,2,	2500	\N	\N
16	10	2020-09-30	09:30:00	21:30:00	,1,	2500	\N	\N
17	11	2020-09-25	11:00:00	15:30:00	1	2600	\N	\N
19	12	2020-09-22	11:00:00	22:30:00	1	2600	\N	\N
20	13	2020-09-30	06:30:00	11:00:00	,1,	2500	\N	\N
\.


--
-- Name: date_bookings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('date_bookings_id_seq', 26, true);


--
-- Data for Name: employer_profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY employer_profiles (id, user_id, type_upload, nick_name, note, remark, publish, deleted, created_at, updated_at) FROM stdin;
17	46	1	sdf	sdfsdf\r\nsdf	\N	t	f	2020-07-21 02:32:11	2020-07-21 02:32:11
9	26	3	Bố ơi mình Đi đâu thế	Xin chào cô giữ trẻ may mắn	\N	t	f	2020-07-02 01:57:52	2020-07-02 01:57:52
8	22	2	NIAHAI	Phụ nữ thích sắm đồ đẹp để con trai ngắm… con trai lại thích ngắm con gái đẹp không mặc đồ.	\N	t	f	2020-07-01 01:39:43	2020-07-01 01:39:43
19	54	1	えむ	よろしくお願いいたします。	\N	t	f	2020-07-29 05:43:13	2020-07-29 05:43:13
10	28	2	Baby Care	This is Test Script	\N	t	f	2020-07-03 05:43:05	2020-07-03 05:43:05
11	32	3	\N	\N	\N	t	f	2020-07-08 05:55:16	2020-07-08 05:55:16
20	59	1	abc	よろしくお願いいたします	\N	t	f	2020-07-30 06:59:16	2020-07-30 06:59:16
14	39	3	ネーム	メッセージ	\N	t	f	2020-07-16 04:33:14	2020-07-16 04:33:14
21	69	1	あかさ	よろしくお願いいたします。	\N	t	f	2020-08-03 07:08:02	2020-08-03 07:08:02
16	45	1	aa	簡単な家事と子供の世話をお願いします。	\N	t	f	2020-07-21 02:14:22	2020-07-21 02:14:22
18	52	1	たま	よろしくお願いいたします	\N	t	f	2020-07-22 05:53:06	2020-07-22 05:53:06
12	33	4	ニックネーム	\N	\N	t	f	2020-07-08 07:00:47	2020-07-08 07:00:47
13	37	3	My Nick name	Hi sitters	\N	t	f	2020-07-10 07:27:59	2020-07-10 07:27:59
15	44	1	ニックネーム（サービス内で公開されます）	メッセージ（ベビーシッターへ送るメッセージです	\N	t	f	2020-07-20 08:10:52	2020-07-20 08:10:52
\.


--
-- Name: employer_profiles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('employer_profiles_id_seq', 21, true);


--
-- Data for Name: experiences; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY experiences (id, name, type, remark, deleted, created_at, updated_at) FROM stdin;
1	保育士	1	\N	f	2020-06-25 08:27:34	2020-06-25 08:27:34
2	看護師	1	\N	f	2020-06-25 08:27:34	2020-06-25 08:27:34
3	幼稚園教論	1	\N	f	2020-06-25 08:27:34	2020-06-25 08:27:34
4	家庭的保育者	1	\N	f	2020-06-25 08:27:34	2020-06-25 08:27:34
5	子育て支援（地域保育コース）	1	\N	f	2020-06-25 08:27:34	2020-06-25 08:27:34
6	ACSAベビーシッター養成研修＋現場研修修了者	1	\N	f	2020-06-25 08:27:34	2020-06-25 08:27:34
7	ACSA居宅訪問基礎研修修了者	1	\N	f	2020-06-25 08:27:34	2020-06-25 08:27:34
8	助産師	1	\N	f	2020-06-25 08:27:34	2020-06-25 08:27:34
9	産後ドゥーラ	1	\N	f	2020-06-25 08:27:34	2020-06-25 08:27:34
10	ナーシングドゥーラ	1	\N	f	2020-06-25 08:27:34	2020-06-25 08:27:34
\.


--
-- Name: experiences_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('experiences_id_seq', 10, true);


--
-- Data for Name: failed_jobs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY failed_jobs (id, connection, queue, payload, exception, failed_at) FROM stdin;
\.


--
-- Name: failed_jobs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('failed_jobs_id_seq', 1, false);


--
-- Data for Name: families; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY families (id, id_profile, first_name, last_name, first_name_furigana, last_name_furigana, birth_date, gender, allergic, chronic, type, remark, deleted, created_at, updated_at, allergic_note, chronic_note) FROM stdin;
31	11	T	TM	T	TM	1992-02-03	1	f	f	1	\N	f	\N	\N	\N	\N
32	11	M	M	M	M	1990-01-07	2	f	f	2	\N	f	\N	\N	\N	\N
33	11	TC	TMC	C	C	2019-01-01	2	t	t	3	\N	f	\N	\N	\N	\N
52	17	名前	名前	フリガナ	フリガナ	2019-01-01	1	f	f	1	\N	f	\N	\N	\N	\N
53	17	名前	名前	フリガナ	フリガナ	2020-01-01	2	f	f	2	\N	f	\N	\N	\N	\N
44	14	OP	PO	P	O	2019-02-06	1	t	f	3	\N	f	\N	\N	Note show only	\N
50	16	坂下	清佳	サカシタ	サヤカ	1999-10-30	2	f	f	2	\N	f	\N	\N	\N	\N
51	16	坂下	蒼大	サカシタ	ソウタ	2017-10-23	1	f	f	3	\N	f	\N	\N	\N	\N
55	18	中尾	研一	ナカオ	ケンイチ	1979-10-30	1	f	f	1	\N	f	\N	\N	\N	\N
56	18	中尾	里歌	ナカオ	リカ	1990-10-09	2	f	f	2	\N	f	\N	\N	\N	\N
57	18	中尾	舞花	ナカオ	マイカ	2018-10-10	2	f	f	3	\N	f	\N	\N	\N	\N
58	19	高山	泰史	タカヤマ	ヤスフミ	1990-10-09	1	f	f	1	\N	f	\N	\N	\N	\N
59	19	高山	香里	タカヤマ	カオリ	1990-10-22	2	f	f	2	\N	f	\N	\N	\N	\N
60	19	高山	瑠菜	タカヤマ	ルナ	2016-06-20	2	t	f	3	\N	f	\N	\N	卵アレルギー	\N
61	19	高山	嘉之	タカヤマ	ヨシユキ	2018-11-12	1	f	f	3	\N	f	\N	\N	\N	\N
62	20	紺野	利勝	コンノ	トシカツ	1988-10-17	1	f	f	1	\N	f	\N	\N	\N	\N
63	20	紺野	菜穂	コンノ	ナホ	1988-04-14	2	f	f	2	\N	f	\N	\N	\N	\N
64	20	紺野	仁	コンノ	ジン	2017-04-06	1	f	f	3	\N	f	\N	\N	\N	\N
37	13	Yamaha	Honda	Ya	Hon	1954-02-19	1	f	f	1	\N	f	\N	\N	\N	\N
38	13	Maria	Kio	Ma	Ki	2008-02-13	2	f	f	2	\N	f	\N	\N	\N	\N
34	12	Trịnh	Thawgn Bình	Trịnh	Bình	1977-03-01	1	f	f	1	\N	f	\N	\N	\N	\N
35	12	LÊ Ngọc	Hoài Thương	Lê	Thương	1978-05-02	2	f	f	2	\N	f	\N	\N	\N	\N
36	12	Trịnh Bình	Minh	Trinh	Minh	2019-02-03	1	f	t	3	\N	f	\N	\N	\N	\N
40	13	Toki	Toki	TO	Ki	2020-01-16	1	f	t	3	\N	f	\N	\N	\N	小児気管支喘息
20	8	澄子	天沼	澄子	天沼	2017-05-05	1	f	f	1	\N	f	\N	\N	\N	\N
21	8	澄子	天沼	澄子	天沼	2005-10-17	2	f	f	2	\N	f	\N	\N	\N	\N
22	8	澄子	天沼	澄子	天沼	2006-07-14	2	t	t	3	\N	f	\N	\N	\N	\N
39	13	Missumisi	Me	Missu	Mi	2019-02-02	2	t	f	3	\N	f	\N	\N	アレルギー性鼻炎	\N
23	9	Trần	Minh	Tran	Minh	1980-03-10	1	f	f	1	\N	f	\N	\N	\N	\N
24	9	Nguỹen	Thị	Nguyen	Thi	1970-04-10	2	f	f	2	\N	f	\N	\N	\N	\N
25	9	Nguyễn Thị	Thiện Tâm	Nguyen	Tâm	2019-01-02	2	t	f	3	\N	f	\N	\N	\N	\N
26	9	Trần Minh	Đại Quang	Tran	Quang	2020-01-02	1	f	t	3	\N	f	\N	\N	\N	\N
27	9	Trần Thị	Thu Thủy	Tran	Thuy	2020-01-01	2	t	t	3	\N	f	\N	\N	\N	\N
28	10	Tris	aa1	Tris	aa1	1970-03-23	1	f	f	1	\N	f	\N	\N	\N	\N
29	10	tsu	ma	tu	ma	1992-03-17	2	f	f	2	\N	f	\N	\N	\N	\N
30	10	ku	ma	ta	chu	2003-02-03	1	f	f	3	\N	f	\N	\N	\N	\N
46	15	T	TM	T	TM	2016-04-04	1	f	f	1	\N	f	\N	\N	\N	\N
47	15	T	TM	họ kata chồng	chồng	2019-02-03	2	f	f	2	\N	f	\N	\N	\N	\N
48	15	T	TM	T	TM	2004-02-16	1	t	t	3	\N	f	\N	\N	\N	\N
65	21	佐伯	善太郎	サエキ	ゼンタロウ	1995-01-31	1	f	f	1	\N	f	\N	\N	\N	\N
66	21	佐伯	文香	サエキ	フミカ	1995-05-07	2	f	f	2	\N	f	\N	\N	\N	\N
67	21	佐伯	航平	サエキ	コウヘイ	2018-07-05	1	t	f	3	\N	f	\N	\N	小麦アレルギー	\N
41	14	TY	TMY	Y	Y	1996-01-18	1	f	f	1	\N	f	\N	\N	\N	\N
42	14	TYU	U	TYU	IU	1998-01-20	2	f	f	2	\N	f	\N	\N	\N	\N
43	14	名前	名	ガナ	ナ	2020-01-15	2	t	t	3	\N	f	\N	\N	Text lorem of アレルギーの有無	Text lorem of 持病、特別なケアの有無
49	16	坂下	常男	サカシタ	ツネオ	1999-09-13	1	f	f	1	\N	f	\N	\N	\N	\N
\.


--
-- Name: families_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('families_id_seq', 67, true);


--
-- Data for Name: galaries; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY galaries (id, user_id, url, type, deleted, created_at, updated_at, name, path) FROM stdin;
179	1	\N	\N	f	\N	\N	1594011224en-OS-8.1.4-Cassandra-book.pdf	/storage/uploads/mixed/
88	1	\N	\N	f	\N	\N	1593764033image.png	/storage/uploads/mixed/
89	1	\N	\N	f	\N	\N	1593764033image.png	/storage/uploads/mixed/
90	1	\N	\N	f	\N	\N	1593764034image.png	/storage/uploads/mixed/
91	1	\N	\N	f	\N	\N	1593764034image.png	/storage/uploads/mixed/
92	1	\N	\N	f	\N	\N	1593764034image.png	/storage/uploads/mixed/
93	1	\N	\N	f	\N	\N	1593764035image.png	/storage/uploads/mixed/
94	1	\N	\N	f	\N	\N	1593764035image.png	/storage/uploads/mixed/
95	1	\N	\N	f	\N	\N	1593764036image.png	/storage/uploads/mixed/
96	1	\N	\N	f	\N	\N	1593764036image.png	/storage/uploads/mixed/
97	1	\N	\N	f	\N	\N	1593764037image.png	/storage/uploads/mixed/
98	1	\N	\N	f	\N	\N	1593764037image.png	/storage/uploads/mixed/
99	1	\N	\N	f	\N	\N	1593764037image.png	/storage/uploads/mixed/
180	1	\N	\N	f	\N	\N	1594016831image.png	/storage/uploads/mixed/
165	1	\N	\N	f	\N	\N	159399491492912542_223204509001080_5437823884051087360_n.jpg	/storage/uploads/mixed/
181	1	\N	\N	f	\N	\N	1594018568ảnh.png	/storage/uploads/mixed/
182	1	\N	\N	f	\N	\N	1594018584ảnh.png	/storage/uploads/mixed/
183	31	\N	1	f	2020-07-06 07:27:13	2020-07-06 07:27:13	1594020433mylove.jpg	/storage/uploads/sitters/
184	31	\N	2	f	2020-07-06 07:27:13	2020-07-06 07:27:13	1594020433chỉ mục.jpg	/storage/uploads/sitters/
185	31	\N	3	f	2020-07-06 07:27:13	2020-07-06 07:27:13	159402043320160309-061446-14574969743191_520x640.jpg	/storage/uploads/sitters/
191	24	\N	6	f	2020-07-08 05:00:01	2020-07-08 05:00:01	1594184400mylove.jpg	/storage/uploads/avatars/
55	26	15936550728071201.jpg	4	f	\N	2020-09-18 07:35:22	1600414522mtruoc.jpg	/storage/uploads/employers/
115	27	\N	6	f	2020-07-03 08:57:40	2020-07-03 08:57:40	1593766660103757645_923985278067109_6608159161252698823_o.jpg	/storage/uploads/avatars/
116	27	\N	6	f	2020-07-03 08:57:45	2020-07-03 08:57:45	159376666512_big.jpg	/storage/uploads/avatars/
192	32	\N	4	f	\N	\N	15941877168071201.jpg	/storage/uploads/employers/
193	32	\N	5	f	\N	\N	1594187716download.jpg	/storage/uploads/employers/
194	33	\N	4	f	\N	\N	1594191647anh-1-3.jpg	/storage/uploads/employers/
120	27	\N	6	f	2020-07-03 09:00:45	2020-07-03 09:00:45	1593766845103004647_923985341400436_1862382915896680438_o.jpg	/storage/uploads/avatars/
121	27	\N	6	f	2020-07-03 09:00:53	2020-07-03 09:00:53	1593766853download.jpg	/storage/uploads/avatars/
122	27	\N	6	f	2020-07-03 09:02:40	2020-07-03 09:02:40	1593766960104372124_923985051400465_8287591145813158413_o.jpg	/storage/uploads/avatars/
123	29	\N	1	f	2020-07-04 06:17:14	2020-07-04 06:17:14	1593843432Screenshot from 2020-05-30 19-44-01.png	/storage/uploads/sitters/
124	29	\N	2	f	2020-07-04 06:17:14	2020-07-04 06:17:14	1593843433Screenshot from 2020-05-30 19-44-10.png	/storage/uploads/sitters/
125	29	\N	3	f	2020-07-04 06:17:14	2020-07-04 06:17:14	1593843433Screenshot from 2020-05-30 19-45-32.png	/storage/uploads/sitters/
47	22	15935675837d8623ac7555880bd144.jpg	4	f	\N	\N	\N	\N
48	22	1593567583d9f533045915a80c0bbddc317acc04c4.jpg	5	f	\N	\N	\N	\N
49	23	1593568271ý.jpg	1	f	2020-07-01 01:51:11	2020-07-01 01:51:11	\N	\N
50	23	1593568271yss.jpg	2	f	2020-07-01 01:51:11	2020-07-01 01:51:11	\N	\N
51	23	159356827112_big.jpg	3	f	2020-07-01 01:51:11	2020-07-01 01:51:11	\N	\N
52	24	1593568464FB_IMG_1584191186498.jpg	1	f	2020-07-01 01:54:24	2020-07-01 01:54:24	\N	\N
53	24	1593568464FB_IMG_1584440490291.jpg	2	f	2020-07-01 01:54:24	2020-07-01 01:54:24	\N	\N
54	24	1593568464FB_IMG_1587373984482.jpg	3	f	2020-07-01 01:54:24	2020-07-01 01:54:24	\N	\N
195	33	\N	5	f	\N	\N	1594191647cach-nuoi-day-con-thanh-tai_1_orig.jpg	/storage/uploads/employers/
196	1	\N	\N	f	\N	\N	1594284830image.png	/storage/uploads/mixed/
60	27	1593754439103004647_923985341400436_1862382915896680438_o.jpg	1	f	2020-07-03 05:33:59	2020-07-03 05:33:59	\N	\N
61	27	1593754439103757645_923985278067109_6608159161252698823_o.jpg	2	f	2020-07-03 05:33:59	2020-07-03 05:33:59	\N	\N
62	27	1593754439104165244_923985371400433_5058625012223294220_o.jpg	3	f	2020-07-03 05:33:59	2020-07-03 05:33:59	\N	\N
63	28	1593754985104180481_3059387490820617_1769332931959019473_o.jpg	4	f	\N	\N	\N	\N
64	28	159375498596528805_2861425413971243_5454547266930999296_o.jpg	5	f	\N	\N	\N	\N
65	1	15937555647d8623ac7555880bd144.jpg	\N	f	\N	\N	\N	\N
66	1	1593755572en-OS-8.1.4-Cassandra-book.pdf	\N	f	\N	\N	\N	\N
67	1	1593756050cám-lợn.png	\N	f	\N	\N	\N	\N
68	1	1593756054462cae64e3b4f4a277658c876ef3bb2e.jpg	\N	f	\N	\N	\N	\N
69	1	1593756193myw3schoolsimage.jpg	\N	f	\N	\N	\N	\N
70	1	15937562227d8623ac7555880bd144.jpg	\N	f	\N	\N	\N	\N
71	1	1593756227cám-lợn.png	\N	f	\N	\N	\N	\N
72	1	1593756233d9f533045915a80c0bbddc317acc04c4.jpg	\N	f	\N	\N	\N	\N
73	1	1593758364d9f533045915a80c0bbddc317acc04c4.jpg	\N	f	\N	\N	\N	\N
74	1	1593758367IMG20190727102825.jpg	\N	f	\N	\N	\N	\N
75	1	15937583717d8623ac7555880bd144.jpg	\N	f	\N	\N	\N	\N
76	1	1593758380sitter_form01.pdf	\N	f	\N	\N	\N	\N
77	1	1593758389sitter_form01 (1).pdf	\N	f	\N	\N	\N	\N
197	1	\N	\N	f	\N	\N	1594286144IMG_1594203300048_1594203549538.jpg	/storage/uploads/mixed/
78	1	\N	\N	f	\N	\N	1593763287d9f533045915a80c0bbddc317acc04c4.jpg	storage/uploads/mixed/
198	1	\N	\N	f	\N	\N	1594286161Hùng xã đoàn.pdf	/storage/uploads/mixed/
199	1	\N	\N	f	\N	\N	15942862321594284830image.png	/storage/uploads/mixed/
200	1	\N	\N	f	\N	\N	1594286239Hùng xã đoàn.pdf	/storage/uploads/mixed/
201	1	\N	\N	f	\N	\N	1594286252FB_IMG_1590852628041.jpg	/storage/uploads/mixed/
59	22	15937522267d8623ac7555880bd144.jpg	7	f	2020-07-03 04:57:06	2020-07-22 07:23:12	159540259249808011_1449556311845934_5408048434861047808_n.jpg	/storage/uploads/avatars/
56	26	1593655072download.jpg	5	f	\N	2020-09-18 07:35:25	1600414525msau.jpg	/storage/uploads/employers/
166	28	\N	7	f	2020-07-06 00:40:06	2020-07-06 00:41:24	1593996084img_job01.jpg	/storage/uploads/avatars/
202	34	\N	1	f	2020-07-10 05:38:01	2020-07-10 05:38:01	159435948112_big.jpg	/storage/uploads/sitters/
203	34	\N	2	f	2020-07-10 05:38:01	2020-07-10 05:38:01	1594359481reactjs-life.png	/storage/uploads/sitters/
204	34	\N	3	f	2020-07-10 05:38:01	2020-07-10 05:38:01	1594359481yss.jpg	/storage/uploads/sitters/
205	34	\N	6	f	2020-07-10 05:38:48	2020-07-10 05:38:48	1594359528unnamed.jpg	/storage/uploads/avatars/
206	34	\N	6	f	2020-07-10 05:38:52	2020-07-10 05:38:52	1594359532wj0000004538.jpg	/storage/uploads/avatars/
207	34	\N	6	f	2020-07-10 05:39:16	2020-07-10 05:39:16	1594359556wj0000004538.jpg	/storage/uploads/avatars/
208	1	\N	\N	f	\N	\N	159436451192664640_252110669300319_106211783861075968_n.jpg	/storage/uploads/mixed/
209	1	\N	\N	f	\N	\N	1594364524quysu.jpg	/storage/uploads/mixed/
210	36	\N	1	f	2020-07-10 07:27:09	2020-07-10 07:27:09	1594366029images (3).jpg	/storage/uploads/sitters/
211	36	\N	2	f	2020-07-10 07:27:09	2020-07-10 07:27:09	1594366029images (4).jpg	/storage/uploads/sitters/
212	36	\N	3	f	2020-07-10 07:27:09	2020-07-10 07:27:09	1594366029images (2).jpg	/storage/uploads/sitters/
213	36	\N	6	f	2020-07-10 07:27:29	2020-07-10 07:27:29	1594366049images.jpg	/storage/uploads/avatars/
215	36	\N	6	f	2020-07-10 07:27:35	2020-07-10 07:27:35	1594366055images (4).jpg	/storage/uploads/avatars/
217	36	\N	6	f	2020-07-10 07:27:40	2020-07-10 07:27:40	1594366060images (2).jpg	/storage/uploads/avatars/
218	37	\N	4	f	\N	\N	15943660798071201.jpg	/storage/uploads/employers/
219	37	\N	5	f	\N	\N	1594366079download.jpg	/storage/uploads/employers/
228	1	\N	\N	f	\N	\N	159462659949808011_1449556311845934_5408048434861047808_n.jpg	/storage/uploads/mixed/
229	24	\N	6	f	2020-07-13 07:51:33	2020-07-13 07:51:33	159462669346786436_1409920099142889_723357876596244480_n.jpg	/storage/uploads/avatars/
230	24	\N	6	f	2020-07-13 07:51:44	2020-07-13 07:51:44	1594626704600_0ee7330f-6cf7-46d4-ba82-4de6523a6497.jpg	/storage/uploads/avatars/
231	1	\N	\N	f	\N	\N	1594627883シッター派遣　登録仕様　.docx	/storage/uploads/mixed/
232	38	\N	6	f	2020-07-14 05:29:10	2020-07-14 05:29:10	1594704549img_avatar2.png	/storage/uploads/avatars/
234	24	\N	6	f	2020-07-15 07:21:06	2020-07-15 07:21:06	1594797666FB_IMG_1584191173221.jpg	/storage/uploads/avatars/
235	24	\N	6	f	2020-07-15 07:21:24	2020-07-15 07:21:24	1594797684FB_IMG_1587336507917.jpg	/storage/uploads/avatars/
236	24	\N	6	f	2020-07-15 07:24:07	2020-07-15 07:24:07	1594797847FB_IMG_1587373984482.jpg	/storage/uploads/avatars/
237	24	\N	6	f	2020-07-15 08:51:02	2020-07-15 08:51:02	1594803062tải xuống.png	/storage/uploads/avatars/
238	24	\N	6	f	2020-07-15 08:51:05	2020-07-15 08:51:05	1594803065z1975853015645_e93e81a59bf4247aab6899268d75c321.jpg	/storage/uploads/avatars/
239	24	\N	6	f	2020-07-15 08:51:08	2020-07-15 08:51:08	1594803068z1971286430352_a449b825524228278f4cd97bf0ebbda8.jpg	/storage/uploads/avatars/
240	24	\N	6	f	2020-07-15 08:51:11	2020-07-15 08:51:11	1594803071z1949631242587_99b7cd4a21e83e6cc7ae6ac181a65474.jpg	/storage/uploads/avatars/
241	24	\N	6	f	2020-07-15 08:51:13	2020-07-15 08:51:13	1594803073z1969047461127_3381c008c7d860aed9206143a70870b1.jpg	/storage/uploads/avatars/
242	24	\N	6	f	2020-07-15 08:51:15	2020-07-15 08:51:15	1594803075z1969046783979_4e570b622414266d1f9f577bc0138dbd.jpg	/storage/uploads/avatars/
245	39	\N	4	f	\N	\N	1594873994Screenshot_1.png	/storage/uploads/employers/
246	39	\N	5	f	\N	\N	159487399475567434_171145764084311_5579921296491282432_o.jpg	/storage/uploads/employers/
249	26	\N	7	f	2020-07-17 00:49:27	2020-07-17 00:49:27	159494696775567434_171145764084311_5579921296491282432_o.jpg	/storage/uploads/avatars/
253	1	\N	\N	f	\N	\N	1595220465MP_ロゴ.png	/storage/uploads/mixed/
254	37	\N	7	f	2020-07-20 05:00:35	2020-07-20 05:00:35	1595221235MP_ロゴ.png	/storage/uploads/avatars/
256	1	\N	\N	f	\N	\N	1595228162z1982946535508_55c0caca298eaea742cdf568cf89c0c9.jpg	/storage/uploads/mixed/
257	1	\N	\N	f	\N	\N	1595228216z1982946535508_55c0caca298eaea742cdf568cf89c0c9.jpg	/storage/uploads/mixed/
258	1	\N	\N	f	\N	\N	1595228319z1982946535508_55c0caca298eaea742cdf568cf89c0c9.jpg	/storage/uploads/mixed/
259	1	\N	\N	f	\N	\N	15952283811593758380sitter_form01.pdf	/storage/uploads/mixed/
260	1	\N	\N	f	\N	\N	1595228402164-banh-kem-sinh-nhat-ve-hinh-hoa-dao-xinh-xan-tang-me.jpg	/storage/uploads/mixed/
261	1	\N	\N	f	\N	\N	1595228437z1982946535508_55c0caca298eaea742cdf568cf89c0c9.jpg	/storage/uploads/mixed/
262	1	\N	\N	f	\N	\N	1595228823z1982946535508_55c0caca298eaea742cdf568cf89c0c9.jpg	/storage/uploads/mixed/
263	1	\N	\N	f	\N	\N	1595228998z1982946535508_55c0caca298eaea742cdf568cf89c0c9.jpg	/storage/uploads/mixed/
264	1	\N	\N	f	\N	\N	1595229049z1983435957761_d8a4438347670d091f137dcfa65be2d0.jpg	/storage/uploads/mixed/
265	1	\N	\N	f	\N	\N	1595229058z1982613639157_b9e39c9cece14889a90dfdd2bcc890ed.jpg	/storage/uploads/mixed/
267	44	\N	4	f	\N	\N	15952326528071201.jpg	/storage/uploads/employers/
268	44	\N	5	f	\N	\N	1595232652anh-1-3.jpg	/storage/uploads/employers/
269	1	\N	\N	f	\N	\N	1595295268MP_ロゴ.png	/storage/uploads/mixed/
270	1	\N	\N	f	\N	\N	1595295318MP_ロゴ.png	/storage/uploads/mixed/
271	45	\N	4	f	\N	\N	1595297662ダウンロード.png	/storage/uploads/employers/
272	45	\N	5	f	\N	\N	1595297662images.jpg	/storage/uploads/employers/
274	46	\N	4	f	\N	\N	1595298731img_job01.jpg	/storage/uploads/employers/
275	46	\N	5	f	\N	\N	1595298731img_job05.jpg	/storage/uploads/employers/
276	46	\N	7	f	2020-07-21 02:32:40	2020-07-21 02:32:40	1595298760img_job05.jpg	/storage/uploads/avatars/
280	1	\N	\N	f	\N	\N	1595305846anh-1-3.jpg	/storage/uploads/mixed/
281	49	\N	1	f	2020-07-21 07:11:33	2020-07-21 07:11:33	1595315493ダウンロード.png	/storage/uploads/sitters/
282	49	\N	2	f	2020-07-21 07:11:33	2020-07-21 07:11:33	1595315493images.jpg	/storage/uploads/sitters/
283	49	\N	3	f	2020-07-21 07:11:33	2020-07-21 07:11:33	1595315493ダウンロード.png	/storage/uploads/sitters/
284	49	\N	6	f	2020-07-21 07:12:39	2020-07-21 07:12:39	1595315559MP_ロゴ.png	/storage/uploads/avatars/
285	47	\N	1	f	2020-07-22 00:05:05	2020-07-22 00:05:05	15953763042020-02-28-111855.png	/storage/uploads/sitters/
286	47	\N	2	f	2020-07-22 00:05:05	2020-07-22 00:05:05	15953763042020-05-07 121732.png	/storage/uploads/sitters/
287	47	\N	3	f	2020-07-22 00:05:05	2020-07-22 00:05:05	1595376305img001.jpg	/storage/uploads/sitters/
288	50	\N	1	f	2020-07-22 00:26:11	2020-07-22 00:26:11	1595377571download.jpg	/storage/uploads/sitters/
289	50	\N	2	f	2020-07-22 00:26:11	2020-07-22 00:26:11	1595377571yss.jpg	/storage/uploads/sitters/
290	50	\N	3	f	2020-07-22 00:26:11	2020-07-22 00:26:11	159537757112_big.jpg	/storage/uploads/sitters/
291	50	\N	6	f	2020-07-22 00:34:07	2020-07-22 00:34:07	1595378046img_avatar2.png	/storage/uploads/avatars/
292	51	\N	1	f	2020-07-22 05:15:55	2020-07-22 05:15:55	1595394954ダウンロード.png	/storage/uploads/sitters/
293	51	\N	2	f	2020-07-22 05:15:55	2020-07-22 05:15:55	1595394954images.jpg	/storage/uploads/sitters/
294	51	\N	3	f	2020-07-22 05:15:55	2020-07-22 05:15:55	1595394955ダウンロード.png	/storage/uploads/sitters/
295	51	\N	6	f	2020-07-22 05:31:26	2020-07-22 05:31:26	1595395886MP_ロゴ.png	/storage/uploads/avatars/
296	52	\N	4	f	\N	\N	1595397186ダウンロード.png	/storage/uploads/employers/
297	52	\N	5	f	\N	\N	1595397186images.jpg	/storage/uploads/employers/
298	52	\N	7	f	2020-07-22 05:55:16	2020-07-22 05:55:16	1595397316wjmtUmDg_400x400.jpg	/storage/uploads/avatars/
299	1	\N	\N	f	\N	\N	1595405292z1983814146465_345972013ac932ba495af3e75dff8a8b.jpg	/storage/uploads/mixed/
300	38	\N	1	f	2020-07-27 07:33:24	2020-07-27 07:33:24	1595835204ý.jpg	/storage/uploads/sitters/
301	38	\N	2	f	2020-07-27 07:33:24	2020-07-27 07:33:24	1595835204yss.jpg	/storage/uploads/sitters/
302	38	\N	3	f	2020-07-27 07:33:24	2020-07-27 07:33:24	159583520412_big.jpg	/storage/uploads/sitters/
308	31	\N	6	f	2020-07-28 00:56:10	2020-07-28 00:56:10	1595897770z1983814146465_345972013ac932ba495af3e75dff8a8b.jpg	/storage/uploads/avatars/
309	31	\N	6	f	2020-07-28 00:56:13	2020-07-28 00:56:13	1595897773z1982613639157_b9e39c9cece14889a90dfdd2bcc890ed.jpg	/storage/uploads/avatars/
310	31	\N	6	f	2020-07-28 00:56:16	2020-07-28 00:56:16	1595897776z1983435957761_d8a4438347670d091f137dcfa65be2d0.jpg	/storage/uploads/avatars/
311	1	\N	\N	f	\N	\N	15959162031594627883シッター派遣　登録仕様　.docx	/storage/uploads/mixed/
312	53	\N	1	f	2020-07-29 04:57:04	2020-07-29 04:57:04	1595998624ダウンロード.png	/storage/uploads/sitters/
313	53	\N	2	f	2020-07-29 04:57:04	2020-07-29 04:57:04	1595998624images.jpg	/storage/uploads/sitters/
314	53	\N	3	f	2020-07-29 04:57:04	2020-07-29 04:57:04	1595998624ダウンロード.png	/storage/uploads/sitters/
315	53	\N	6	f	2020-07-29 05:25:09	2020-07-29 05:25:09	1596000309pikatyuu.png	/storage/uploads/avatars/
316	54	\N	4	f	\N	\N	1596001393ダウンロード.png	/storage/uploads/employers/
317	54	\N	5	f	\N	\N	1596001394images.jpg	/storage/uploads/employers/
318	55	\N	1	f	2020-07-30 03:09:52	2020-07-30 03:09:52	1596078592wj0000004538.jpg	/storage/uploads/sitters/
319	55	\N	2	f	2020-07-30 03:09:52	2020-07-30 03:09:52	1596078592yss.jpg	/storage/uploads/sitters/
320	55	\N	3	f	2020-07-30 03:09:52	2020-07-30 03:09:52	1596078592yss.jpg	/storage/uploads/sitters/
321	56	\N	1	f	2020-07-30 04:31:08	2020-07-30 04:31:08	1596083468ダウンロード.png	/storage/uploads/sitters/
322	56	\N	2	f	2020-07-30 04:31:08	2020-07-30 04:31:08	1596083468images.jpg	/storage/uploads/sitters/
323	56	\N	3	f	2020-07-30 04:31:08	2020-07-30 04:31:08	1596083468ダウンロード.png	/storage/uploads/sitters/
324	56	\N	6	f	2020-07-30 04:42:18	2020-07-30 04:42:18	1596084138水色.jpg	/storage/uploads/avatars/
325	57	\N	1	f	2020-07-30 05:12:50	2020-07-30 05:12:50	1596085970ダウンロード.png	/storage/uploads/sitters/
326	57	\N	2	f	2020-07-30 05:12:50	2020-07-30 05:12:50	1596085970images.jpg	/storage/uploads/sitters/
327	57	\N	3	f	2020-07-30 05:12:50	2020-07-30 05:12:50	1596085970images.jpg	/storage/uploads/sitters/
331	58	\N	1	f	2020-07-30 05:17:24	2020-07-30 05:17:24	1596086244images (2).jpg	/storage/uploads/sitters/
332	58	\N	2	f	2020-07-30 05:17:24	2020-07-30 05:17:24	1596086244images (4).jpg	/storage/uploads/sitters/
333	58	\N	3	f	2020-07-30 05:17:24	2020-07-30 05:17:24	1596086244images (4).jpg	/storage/uploads/sitters/
334	57	\N	6	f	2020-07-30 05:30:29	2020-07-30 05:30:29	1596087028ダウンロード.jpg	/storage/uploads/avatars/
335	59	\N	4	f	\N	\N	1596092356ダウンロード.png	/storage/uploads/employers/
336	59	\N	5	f	\N	\N	1596092356images.jpg	/storage/uploads/employers/
337	60	\N	1	f	2020-07-30 07:16:15	2020-07-30 07:16:15	1596093374ダウンロード.png	/storage/uploads/sitters/
338	60	\N	2	f	2020-07-30 07:16:15	2020-07-30 07:16:15	1596093374images.jpg	/storage/uploads/sitters/
339	60	\N	3	f	2020-07-30 07:16:15	2020-07-30 07:16:15	1596093374images.jpg	/storage/uploads/sitters/
340	60	\N	6	f	2020-07-30 07:35:17	2020-07-30 07:35:17	1596094517ダウンロード (1).jpg	/storage/uploads/avatars/
342	1	\N	\N	f	\N	\N	1596177858image.png	/storage/uploads/mixed/
343	1	\N	\N	f	\N	\N	1596177862image.png	/storage/uploads/mixed/
344	1	\N	\N	f	\N	\N	1596177875image.png	/storage/uploads/mixed/
346	38	\N	6	f	2020-07-31 08:12:48	2020-07-31 08:12:48	159618316820200627_044602.jpg	/storage/uploads/avatars/
347	38	\N	6	f	2020-07-31 08:14:43	2020-07-31 08:14:43	159618328220200627_044602.jpg	/storage/uploads/avatars/
349	69	\N	4	f	\N	\N	1596438482Screenshot_20200803-135604.png	/storage/uploads/employers/
350	69	\N	5	f	\N	\N	1596438483Screenshot_20200803-133236.png	/storage/uploads/employers/
351	1	\N	\N	f	\N	\N	1596438735Screenshot_20200803-135604.png	/storage/uploads/mixed/
352	70	\N	1	f	2020-08-03 08:12:21	2020-08-03 08:12:21	1596442341ダウンロード.png	/storage/uploads/sitters/
353	70	\N	2	f	2020-08-03 08:12:21	2020-08-03 08:12:21	1596442341images.jpg	/storage/uploads/sitters/
354	70	\N	3	f	2020-08-03 08:12:21	2020-08-03 08:12:21	1596442341images.jpg	/storage/uploads/sitters/
359	29	\N	6	f	2020-08-04 06:38:28	2020-08-04 06:38:28	1596523108yss.jpg	/storage/uploads/avatars/
372	29	\N	6	f	2020-09-03 08:44:03	2020-09-03 08:44:03	1599122643unnamed.jpg	/storage/uploads/avatars/
373	29	\N	6	f	2020-09-03 08:44:09	2020-09-03 08:44:09	159912264992912542_223204509001080_5437823884051087360_n.jpg	/storage/uploads/avatars/
374	72	\N	1	f	2020-09-18 07:45:54	2020-09-18 07:45:54	1600415153mtruoc.jpg	/storage/uploads/sitters/
375	72	\N	2	f	2020-09-18 07:45:54	2020-09-18 07:45:54	1600415154msau.jpg	/storage/uploads/sitters/
376	72	\N	3	f	2020-09-18 07:45:54	2020-09-18 07:45:54	1600415154msau.jpg	/storage/uploads/sitters/
377	72	\N	6	f	2020-09-18 07:50:14	2020-09-18 07:50:14	1600415414msau.jpg	/storage/uploads/avatars/
378	72	\N	6	f	2020-09-18 07:50:16	2020-09-18 07:50:16	1600415416mtruoc.jpg	/storage/uploads/avatars/
\.


--
-- Name: galaries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('galaries_id_seq', 378, true);


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY migrations (id, migration, batch) FROM stdin;
15	2014_10_12_000000_create_users_table	1
16	2019_08_19_000000_create_failed_jobs_table	1
17	2020_06_08_070942_sitter_profiles_table	1
18	2020_06_08_071541_employer_profiles_table	1
19	2020_06_08_074125_schedules_table	1
20	2020_06_08_074612_galaries_table	1
21	2020_06_08_074829_token_refeshes_table	1
22	2020_06_09_072943_experiences_table	1
23	2020_06_09_073036_activity_experiences_table	1
24	2020_06_09_073058_skills_table	1
25	2020_06_09_073117_activity_skills_table	1
26	2020_06_09_073207_families_table	1
27	2020_06_15_054611_create_verify_emails_table	1
28	2020_06_19_073036_password_reset_table	1
29	2020_06_22_041102_create_sitters_table	2
30	2020_06_22_045421_create_salaries_table	2
31	2020_06_26_044004_change_schedules_table_column_type	3
32	2020_06_29_060147_change_sitters_table_column	4
33	2020_07_03_062946_add_column_galaries_table	5
34	2020_07_06_060032_add_column_user_table	6
35	2020_07_15_074159_add_column_family	6
36	2020_07_20_014017_add_column_sitters_table	7
37	2020_08_12_022220_add_exp_kid_qty_to_sitters_table	8
38	2020_08_13_055825_create_sitter_reviews_table	9
39	2020_08_14_021127_create_verify_rates_table	9
40	2020_08_25_042930_create_booking	10
41	2020_08_25_072745_add_column_to_user_table	10
42	2020_08_28_074254_create_date_booking	10
43	2020_09_03_050625_add_column_to_users_table	10
64	2020_09_09_090336_create_orders	11
65	2020_09_09_090447_create_payments	11
66	2020_09_09_090502_create_refunds	11
67	2020_09_10_003921_create_payouts	11
68	2020_09_11_060410_add_column_booking	11
69	2020_09_16_041930_add_colum_payout	12
70	2020_09_16_045650_add_colum_payment	12
71	2020_09_18_044833_add_hidden_channel_to_bookings	13
\.


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('migrations_id_seq', 71, true);


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY orders (id, booking_id, salary, diff_time, price, vat, fee_stripe, profit, status, note, created_at, updated_at) FROM stdin;
1	3	2700	10.5	28350	2835	1122	5670	0	\N	2020-09-15 00:45:13	2020-09-15 00:45:13
2	1	2500	7	17500	1750	693	3500	1	You passed an empty string for 'customer'. We assume empty values are an attempt to unset a parameter; however 'customer' cannot be unset. You should remove 'customer' from your request or supply a non-empty value.	2020-09-15 04:52:53	2020-09-15 04:52:59
4	1	2500	7	17500	1750	693	3500	0	\N	2020-09-15 04:53:04	2020-09-15 04:53:04
3	1	2500	7	17500	1750	693	3500	1	You passed an empty string for 'customer'. We assume empty values are an attempt to unset a parameter; however 'customer' cannot be unset. You should remove 'customer' from your request or supply a non-empty value.	2020-09-15 04:52:59	2020-09-15 04:53:04
5	6	2500	5	12500	1250	494	2500	1	You passed an empty string for 'customer'. We assume empty values are an attempt to unset a parameter; however 'customer' cannot be unset. You should remove 'customer' from your request or supply a non-empty value.	2020-09-15 04:58:17	2020-09-15 04:58:17
6	8	2500	6	15000	1500	594	3000	1	You passed an empty string for 'customer'. We assume empty values are an attempt to unset a parameter; however 'customer' cannot be unset. You should remove 'customer' from your request or supply a non-empty value.	2020-09-15 06:24:10	2020-09-15 06:24:10
7	9	2500	9.5	23750	2375	940	4750	1	You passed an empty string for 'customer'. We assume empty values are an attempt to unset a parameter; however 'customer' cannot be unset. You should remove 'customer' from your request or supply a non-empty value.	2020-09-15 07:06:59	2020-09-15 07:06:59
10	10	2500	12	30000	3000	1188	6000	0	\N	2020-09-15 07:12:05	2020-09-15 07:12:05
9	10	2500	12	30000	3000	1188	6000	1	You passed an empty string for 'customer'. We assume empty values are an attempt to unset a parameter; however 'customer' cannot be unset. You should remove 'customer' from your request or supply a non-empty value.	2020-09-15 07:12:01	2020-09-15 07:12:05
11	10	2500	12	30000	3000	1188	6000	0	\N	2020-09-15 07:12:16	2020-09-15 07:12:16
8	10	2500	12	30000	3000	1188	6000	1	You passed an empty string for 'customer'. We assume empty values are an attempt to unset a parameter; however 'customer' cannot be unset. You should remove 'customer' from your request or supply a non-empty value.	2020-09-15 07:11:36	2020-09-15 07:12:16
12	11	2600	4.5	11700	1170	463	2340	1	You passed an empty string for 'customer'. We assume empty values are an attempt to unset a parameter; however 'customer' cannot be unset. You should remove 'customer' from your request or supply a non-empty value.	2020-09-15 07:23:30	2020-09-15 07:23:30
13	12	2600	12	31200	3744	1482	6240	1	You passed an empty string for 'customer'. We assume empty values are an attempt to unset a parameter; however 'customer' cannot be unset. You should remove 'customer' from your request or supply a non-empty value.	2020-09-15 08:46:27	2020-09-16 07:49:09
14	13	2500	4.5	11250	1350	534	2250	1	You passed an empty string for 'customer'. We assume empty values are an attempt to unset a parameter; however 'customer' cannot be unset. You should remove 'customer' from your request or supply a non-empty value.	2020-09-16 08:38:38	2020-09-16 08:50:59
15	14	1100	1.5	1650	198	78	330	0	\N	2020-09-18 08:16:56	2020-09-18 08:16:56
16	15	1100	3	3300	396	156	660	0	\N	2020-09-18 08:30:01	2020-09-18 08:30:01
\.


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('orders_id_seq', 16, true);


--
-- Data for Name: password_reset; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY password_reset (id, user_id, verify_code, date_send, created_at, updated_at) FROM stdin;
1	36	05ff16ca54bc7396c46871d7888e87	2020-07-17 05:26:31	2020-07-17 05:26:31	2020-07-17 05:26:31
2	26	0b8b5a1ecf3b659d8311c7ec8e4f6e	2020-07-21 01:29:29	2020-07-21 01:28:07	2020-07-21 01:29:29
3	45	6fe680740938cb7d6b824e856d2e0b	2020-07-21 02:14:53	2020-07-21 02:14:53	2020-07-21 02:14:53
4	32	2b84a0bcba1851a4a61a9b5d4affd5	2020-07-21 04:26:47	2020-07-21 04:18:19	2020-07-21 04:26:47
5	39	c7d2381e72323f9d2119aacda156a1	2020-07-21 04:54:24	2020-07-21 04:54:24	2020-07-21 04:54:24
6	50	775d5d7d43015f4fb2c5d3a035eafc	2020-07-22 00:43:10	2020-07-22 00:42:49	2020-07-22 00:43:10
9	38	7ac5caa983e81fad796fcd9d81f21f	2020-07-27 07:53:41	2020-07-27 07:53:35	2020-07-27 07:53:41
7	51	a8de888607e5ceaffebc8ce93063ba	2020-07-29 04:38:09	2020-07-22 05:33:01	2020-07-29 04:38:09
8	52	e1d03f08e3effad9a8048daa16cdd1	2020-07-29 05:35:15	2020-07-22 05:53:29	2020-07-29 05:35:15
11	56	50be459d0fee2eebd3d2c30b1a39e9	2020-07-30 04:56:37	2020-07-30 04:56:37	2020-07-30 04:56:37
12	54	fc21e11057e3614c4395a274e6c5da	2020-07-30 05:01:55	2020-07-30 05:01:55	2020-07-30 05:01:55
10	29	79bdc1e9fbabf2da62329af9a2b57f	2020-08-11 08:02:40	2020-07-28 00:06:26	2020-08-11 08:02:40
\.


--
-- Name: password_reset_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('password_reset_id_seq', 12, true);


--
-- Data for Name: payments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY payments (id, user_id, order_id, stripe_payment, created_at, updated_at, is_payout) FROM stdin;
1	22	1	pi_1HRSIHEkyn0XMKpG0ObCCHR2	2020-09-15 00:45:13	2020-09-15 00:45:13	0
2	37	14	pi_1HRwLvEkyn0XMKpGhvPL43DO	2020-09-16 08:51:00	2020-09-16 08:51:00	0
3	26	15	pi_1HSem4Ekyn0XMKpGMhYAgz5m	2020-09-18 08:16:56	2020-09-18 08:16:56	0
4	26	16	pi_1HSeyjEkyn0XMKpGz4RdsqXa	2020-09-18 08:30:02	2020-09-18 08:30:02	0
\.


--
-- Name: payments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('payments_id_seq', 4, true);


--
-- Data for Name: payouts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY payouts (id, stripe_tranfer, status, note, created_at, updated_at, payment_id) FROM stdin;
\.


--
-- Name: payouts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('payouts_id_seq', 1, false);


--
-- Data for Name: refunds; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY refunds (id, type, amount, reason, refund_nf, note, created_at, updated_at) FROM stdin;
\.


--
-- Name: refunds_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('refunds_id_seq', 1, false);


--
-- Data for Name: salaries; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY salaries (id, user_id, salary, type, created_at, updated_at) FROM stdin;
7	24	2600	1	2020-07-01 01:56:27	2020-07-01 01:56:27
8	24	2700	2	2020-07-01 01:56:27	2020-07-01 01:56:27
9	27	2300	1	2020-07-03 05:36:09	2020-07-03 05:36:09
10	27	2300	2	2020-07-03 05:36:09	2020-07-03 05:36:09
14	36	2500	2	2020-07-10 07:28:56	2020-07-10 07:28:56
13	36	1500	1	2020-07-10 07:28:56	2020-07-17 05:11:41
15	50	1200	1	2020-07-22 00:34:49	2020-07-22 00:34:49
16	50	1300	2	2020-07-22 00:34:49	2020-07-22 00:34:49
17	51	2000	1	2020-07-22 05:32:21	2020-07-22 05:32:21
18	51	1800	2	2020-07-22 05:32:21	2020-07-22 05:32:21
19	34	1100	1	2020-07-27 00:23:24	2020-07-27 00:23:24
20	34	2300	2	2020-07-27 00:23:24	2020-07-27 00:23:24
21	31	1200	1	2020-07-28 01:00:52	2020-07-28 01:00:52
22	31	2500	2	2020-07-28 01:00:52	2020-07-28 01:00:52
23	53	1600	1	2020-07-29 05:33:23	2020-07-29 05:33:23
24	53	1500	2	2020-07-29 05:33:23	2020-07-29 05:33:23
25	56	1400	1	2020-07-30 04:42:57	2020-07-30 04:42:57
26	56	1800	2	2020-07-30 04:42:57	2020-07-30 04:42:57
27	57	1600	1	2020-07-30 05:30:35	2020-07-30 05:30:35
28	57	1600	2	2020-07-30 05:30:35	2020-07-30 05:30:35
29	60	1500	1	2020-07-30 07:35:38	2020-07-30 07:35:38
30	60	1800	2	2020-07-30 07:35:38	2020-07-30 07:35:38
31	38	1400	1	2020-07-31 08:14:21	2020-07-31 08:14:21
32	38	1600	2	2020-07-31 08:14:21	2020-07-31 08:14:21
11	29	2800	1	2020-07-04 06:31:46	2020-08-20 06:24:55
12	29	1500	2	2020-07-04 06:31:46	2020-08-20 06:24:55
33	72	1100	1	2020-09-18 07:51:45	2020-09-18 07:51:45
34	72	1100	2	2020-09-18 07:51:45	2020-09-18 07:51:45
\.


--
-- Name: salaries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('salaries_id_seq', 34, true);


--
-- Data for Name: schedules; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY schedules (id, user_id, work_date, start, finish, overnight, type, status, created_at, updated_at) FROM stdin;
957	34	2020-07-27	12:14:00	15:16:00	f	1	0	2020-07-27 00:23:24	2020-07-27 00:23:24
958	34	2020-07-28	12:14:00	15:16:00	f	1	0	2020-07-27 00:23:24	2020-07-27 00:23:24
959	34	2020-07-29	12:14:00	15:16:00	f	1	0	2020-07-27 00:23:24	2020-07-27 00:23:24
2409	36	2020-09-19	12:30:00	20:20:00	f	,2,	1	2020-09-17 08:16:10	2020-09-17 08:16:10
2410	36	2020-09-14	10:00:00	19:00:00	f	,1,2,	1	2020-09-17 08:16:10	2020-09-17 08:16:10
2411	36	2020-09-17	12:30:00	20:20:00	f	,2,	0	2020-09-17 08:16:10	2020-09-17 08:16:10
2412	36	2020-09-20	12:30:00	20:20:00	f	,2,	0	2020-09-17 08:16:10	2020-09-17 08:16:10
2413	36	2020-09-21	12:30:00	20:20:00	f	,2,	0	2020-09-17 08:16:10	2020-09-17 08:16:10
2414	36	2020-09-22	12:30:00	20:20:00	f	,2,	0	2020-09-17 08:16:10	2020-09-17 08:16:10
2415	36	2020-09-28	08:10:00	21:10:00	f	,1,	0	2020-09-17 08:16:10	2020-09-17 08:16:10
2416	36	2020-09-29	08:10:00	21:10:00	f	,1,	0	2020-09-17 08:16:10	2020-09-17 08:16:10
2417	36	2020-09-18	12:30:00	20:20:00	f	,2,	1	2020-09-17 08:16:10	2020-09-17 08:16:10
2418	36	2020-09-16	12:30:00	20:20:00	f	,2,	1	2020-09-17 08:16:10	2020-09-17 08:16:10
2419	36	2020-09-30	08:10:00	21:10:00	f	,1,	1	2020-09-17 08:16:10	2020-09-17 08:16:10
955	51	2020-07-25	15:00:00	20:00:00	f	1	0	2020-07-22 05:32:21	2020-07-22 05:32:21
846	27	2020-07-31	08:00:00	12:00:00	f	1	1	2020-07-20 08:15:13	2020-07-20 08:15:13
1100	31	2020-08-13	01:34:00	04:05:00	f	1	0	2020-07-28 01:03:22	2020-07-28 01:03:22
1101	31	2020-08-18	01:02:00	03:06:00	f	1	0	2020-07-28 01:03:22	2020-07-28 01:03:22
1103	31	2020-08-21	01:02:00	03:06:00	f	1	0	2020-07-28 01:03:22	2020-07-28 01:03:22
1108	31	2020-08-03	01:02:00	03:04:00	f	1	0	2020-07-28 01:03:22	2020-07-28 01:03:22
2420	36	2020-07-15	08:00:00	17:00:00	f	1	1	2020-09-17 08:16:10	2020-09-17 08:16:10
2421	36	2020-07-16	08:00:00	17:00:00	f	1	1	2020-09-17 08:16:10	2020-09-17 08:16:10
2422	36	2020-07-17	08:00:00	17:00:00	f	1	1	2020-09-17 08:16:10	2020-09-17 08:16:10
1072	50	2020-07-22	12:40:00	15:45:00	f	2	1	2020-07-28 00:22:55	2020-07-28 00:22:55
960	34	2020-07-30	06:12:00	15:12:00	f	2	0	2020-07-27 00:23:24	2020-07-27 00:23:24
1096	31	2020-07-30	01:02:00	03:04:00	f	2	1	2020-07-28 01:03:22	2020-07-28 01:03:22
1097	31	2020-07-31	01:02:00	03:04:00	f	2	1	2020-07-28 01:03:22	2020-07-28 01:03:22
2423	36	2020-07-18	08:00:00	17:00:00	f	1	0	2020-09-17 08:16:10	2020-09-17 08:16:10
1095	31	2020-07-29	01:02:00	03:04:00	f	2	1	2020-07-28 01:03:22	2020-07-28 01:03:22
2424	36	2020-07-19	08:00:00	17:00:00	f	1	1	2020-09-17 08:16:10	2020-09-17 08:16:10
1073	50	2020-07-28	14:20:00	15:12:00	f	2	0	2020-07-28 00:22:55	2020-07-28 00:22:55
954	51	2020-07-24	10:00:00	14:00:00	f	2	0	2020-07-22 05:32:21	2020-07-22 05:32:21
2425	36	2020-07-20	08:00:00	17:00:00	f	1	1	2020-09-17 08:16:10	2020-09-17 08:16:10
1106	31	2020-08-25	01:02:00	03:06:00	f	2	0	2020-07-28 01:03:22	2020-07-28 01:03:22
1109	31	2020-08-04	01:02:00	03:04:00	f	2	0	2020-07-28 01:03:22	2020-07-28 01:03:22
2426	36	2020-07-21	08:00:00	17:00:00	f	1	1	2020-09-17 08:16:10	2020-09-17 08:16:10
1110	31	2020-08-05	10:02:00	11:04:00	f	2	0	2020-07-28 01:03:22	2020-07-28 01:03:22
1112	31	2020-08-07	01:34:00	04:05:00	f	2	0	2020-07-28 01:03:22	2020-07-28 01:03:22
1107	31	2020-08-27	01:02:00	03:04:00	f	2	1	2020-07-28 01:03:22	2020-07-28 01:03:22
1074	50	2020-07-30	12:12:00	14:12:00	f	2	0	2020-07-28 00:22:55	2020-07-28 00:22:55
2427	36	2020-07-22	12:00:00	17:00:00	f	1	1	2020-09-17 08:16:10	2020-09-17 08:16:10
961	34	2020-07-31	02:44:00	12:12:00	f	2	0	2020-07-27 00:23:24	2020-07-27 00:23:24
2428	36	2020-07-23	09:00:00	17:00:00	f	2	1	2020-09-17 08:16:10	2020-09-17 08:16:10
1114	31	2020-08-09	01:34:00	04:05:00	f	2	0	2020-07-28 01:03:22	2020-07-28 01:03:22
2429	36	2020-07-24	10:00:00	17:00:00	f	1	1	2020-09-17 08:16:10	2020-09-17 08:16:10
2430	36	2020-07-25	08:00:00	17:00:00	f	1	1	2020-09-17 08:16:10	2020-09-17 08:16:10
2431	36	2020-07-26	08:00:00	17:00:00	f	1	1	2020-09-17 08:16:10	2020-09-17 08:16:10
2432	36	2020-07-27	08:00:00	17:00:00	f	1	1	2020-09-17 08:16:10	2020-09-17 08:16:10
2433	36	2020-07-28	08:00:00	17:00:00	f	1	1	2020-09-17 08:16:10	2020-09-17 08:16:10
2434	36	2020-07-30	09:00:00	21:00:00	f	1	0	2020-09-17 08:16:10	2020-09-17 08:16:10
2435	36	2020-07-31	09:00:00	21:00:00	f	1	0	2020-09-17 08:16:10	2020-09-17 08:16:10
2436	36	2020-08-10	10:00:00	13:00:00	f	1	1	2020-09-17 08:16:10	2020-09-17 08:16:10
2437	36	2020-08-11	11:00:00	17:00:00	f	1	1	2020-09-17 08:16:10	2020-09-17 08:16:10
2442	72	2020-09-22	06:00:00	12:00:00	f	2	0	2020-09-18 07:51:45	2020-09-18 07:51:45
2443	72	2020-09-23	06:00:00	12:00:00	f	2	0	2020-09-18 07:51:45	2020-09-18 07:51:45
2444	72	2020-09-24	06:00:00	12:00:00	f	2	0	2020-09-18 07:51:45	2020-09-18 07:51:45
2445	72	2020-09-25	06:00:00	12:00:00	f	2	0	2020-09-18 07:51:45	2020-09-18 07:51:45
953	51	2020-07-23	09:00:00	14:30:00	f	2	0	2020-07-22 05:32:21	2020-07-22 05:32:21
956	51	2020-07-26	10:00:00	15:00:00	f	2	0	2020-07-22 05:32:21	2020-07-22 05:32:21
1098	31	2020-08-10	01:34:00	04:05:00	f	2	0	2020-07-28 01:03:22	2020-07-28 01:03:22
1099	31	2020-08-12	01:34:00	04:05:00	f	2	0	2020-07-28 01:03:22	2020-07-28 01:03:22
1102	31	2020-08-20	01:02:00	03:06:00	f	2	0	2020-07-28 01:03:22	2020-07-28 01:03:22
1104	31	2020-08-22	01:05:00	03:06:00	f	2	0	2020-07-28 01:03:22	2020-07-28 01:03:22
1105	31	2020-08-23	01:02:00	03:06:00	f	2	0	2020-07-28 01:03:22	2020-07-28 01:03:22
1111	31	2020-08-06	01:34:00	04:05:00	f	2	0	2020-07-28 01:03:22	2020-07-28 01:03:22
1113	31	2020-08-08	01:34:00	04:05:00	f	2	0	2020-07-28 01:03:22	2020-07-28 01:03:22
2446	72	2020-09-26	06:00:00	12:00:00	f	2	0	2020-09-18 07:51:45	2020-09-18 07:51:45
2447	72	2020-09-27	06:00:00	12:00:00	f	2	0	2020-09-18 07:51:45	2020-09-18 07:51:45
2448	72	2020-09-28	06:00:00	12:00:00	f	2	0	2020-09-18 07:51:45	2020-09-18 07:51:45
2449	72	2020-09-29	06:00:00	12:00:00	f	2	0	2020-09-18 07:51:45	2020-09-18 07:51:45
2450	72	2020-09-30	06:00:00	12:00:00	f	2	0	2020-09-18 07:51:45	2020-09-18 07:51:45
2438	72	2020-09-18	06:00:00	12:00:00	f	2	1	2020-09-18 07:51:45	2020-09-18 07:51:45
2439	72	2020-09-19	06:00:00	12:00:00	f	2	1	2020-09-18 07:51:45	2020-09-18 07:51:45
2440	72	2020-09-20	06:00:00	12:00:00	f	2	1	2020-09-18 07:51:45	2020-09-18 07:51:45
2441	72	2020-09-21	06:00:00	12:00:00	f	2	1	2020-09-18 07:51:45	2020-09-18 07:51:45
1155	56	2020-07-31	12:00:00	19:00:00	f	1	0	2020-07-30 04:56:22	2020-07-30 04:56:22
1158	56	2020-08-03	10:00:00	16:00:00	f	1	0	2020-07-30 04:56:22	2020-07-30 04:56:22
1159	56	2020-08-04	10:00:00	16:00:00	f	1	0	2020-07-30 04:56:22	2020-07-30 04:56:22
1163	57	2020-08-03	10:00:00	15:00:00	f	1	0	2020-07-30 05:30:35	2020-07-30 05:30:35
1154	56	2020-07-30	10:00:00	18:00:00	f	2	0	2020-07-30 04:56:22	2020-07-30 04:56:22
1157	56	2020-08-02	10:00:00	16:00:00	f	2	0	2020-07-30 04:56:22	2020-07-30 04:56:22
1160	57	2020-07-30	10:00:00	19:00:00	f	2	0	2020-07-30 05:30:35	2020-07-30 05:30:35
1161	57	2020-07-31	10:00:00	15:00:00	f	2	0	2020-07-30 05:30:35	2020-07-30 05:30:35
1498	60	2020-08-03	10:00:00	16:00:00	f	1	1	2020-08-12 05:36:24	2020-08-12 05:36:24
1499	60	2020-08-01	10:00:00	16:00:00	f	1	0	2020-08-12 05:36:24	2020-08-12 05:36:24
1944	53	2020-08-27	09:00:00	18:00:00	f	1	0	2020-08-31 05:20:58	2020-08-31 05:20:58
1946	53	2020-08-01	10:00:00	19:00:00	f	1	0	2020-08-31 05:20:58	2020-08-31 05:20:58
1948	53	2020-07-29	10:00:00	15:00:00	f	1	0	2020-08-31 05:20:58	2020-08-31 05:20:58
1949	53	2020-07-30	10:00:00	19:00:00	f	1	1	2020-08-31 05:20:58	2020-08-31 05:20:58
1984	29	2020-10-14	12:12:00	13:12:00	f	1	0	2020-09-04 02:37:49	2020-09-04 02:37:49
1989	29	2020-07-16	12:23:00	17:12:00	f	1	1	2020-09-04 02:37:49	2020-09-04 02:37:49
2002	29	2020-09-26	12:40:00	18:12:00	f	1	1	2020-09-04 02:37:49	2020-09-04 02:37:49
2000	29	2020-09-16	12:32:00	15:12:00	f	2	1	2020-09-04 02:37:49	2020-09-04 02:37:49
1156	56	2020-08-01	10:00:00	16:00:00	f	2	0	2020-07-30 04:56:22	2020-07-30 04:56:22
1162	57	2020-08-02	10:00:00	19:00:00	f	2	0	2020-07-30 05:30:35	2020-07-30 05:30:35
1500	60	2020-08-02	10:00:00	16:00:00	f	2	0	2020-08-12 05:36:24	2020-08-12 05:36:24
1945	53	2020-08-28	09:00:00	18:00:00	f	2	0	2020-08-31 05:20:58	2020-08-31 05:20:58
1950	53	2020-07-31	13:00:00	19:00:00	f	2	1	2020-08-31 05:20:58	2020-08-31 05:20:58
1985	29	2020-07-10	10:30:00	15:20:00	f	2	0	2020-09-04 02:37:49	2020-09-04 02:37:49
1986	29	2020-07-11	10:30:00	15:20:00	f	2	1	2020-09-04 02:37:49	2020-09-04 02:37:49
1987	29	2020-07-12	10:30:00	15:20:00	f	2	0	2020-09-04 02:37:49	2020-09-04 02:37:49
1988	29	2020-07-13	10:30:00	15:20:00	f	2	0	2020-09-04 02:37:49	2020-09-04 02:37:49
1990	29	2020-07-05	10:30:00	15:20:00	f	2	0	2020-09-04 02:37:49	2020-09-04 02:37:49
1991	29	2020-07-09	10:30:00	15:20:00	f	2	0	2020-09-04 02:37:49	2020-09-04 02:37:49
1992	29	2020-07-06	10:30:00	15:20:00	f	2	1	2020-09-04 02:37:49	2020-09-04 02:37:49
1993	29	2020-07-07	10:30:00	15:20:00	f	2	1	2020-09-04 02:37:49	2020-09-04 02:37:49
1994	29	2020-07-08	10:30:00	15:20:00	f	2	1	2020-09-04 02:37:49	2020-09-04 02:37:49
1998	29	2020-08-27	12:30:00	17:30:00	f	2	1	2020-09-04 02:37:49	2020-09-04 02:37:49
1999	29	2020-08-28	12:30:00	19:30:00	f	2	0	2020-09-04 02:37:49	2020-09-04 02:37:49
2001	29	2020-09-23	12:30:00	17:12:00	f	2	0	2020-09-04 02:37:49	2020-09-04 02:37:49
1469	38	2020-07-31	12:30:00	18:40:00	f	2	0	2020-08-12 05:22:05	2020-08-12 05:22:05
1501	60	2020-08-04	10:00:00	16:00:00	f	2	0	2020-08-12 05:36:24	2020-08-12 05:36:24
1502	60	2020-08-05	10:00:00	16:00:00	f	2	0	2020-08-12 05:36:24	2020-08-12 05:36:24
1503	60	2020-08-06	10:00:00	16:00:00	f	2	0	2020-08-12 05:36:24	2020-08-12 05:36:24
1504	60	2020-07-31	10:00:00	16:00:00	f	2	1	2020-08-12 05:36:24	2020-08-12 05:36:24
1505	60	2020-07-30	10:00:00	19:00:00	f	2	0	2020-08-12 05:36:24	2020-08-12 05:36:24
1943	53	2020-08-26	09:00:00	18:00:00	f	2	1	2020-08-31 05:20:58	2020-08-31 05:20:58
1947	53	2020-08-02	09:00:00	16:00:00	f	2	1	2020-08-31 05:20:58	2020-08-31 05:20:58
1995	29	2020-08-23	12:15:00	18:20:00	f	2	0	2020-09-04 02:37:49	2020-09-04 02:37:49
1996	29	2020-08-24	12:15:00	18:20:00	f	2	0	2020-09-04 02:37:49	2020-09-04 02:37:49
1997	29	2020-08-25	12:15:00	18:20:00	f	2	0	2020-09-04 02:37:49	2020-09-04 02:37:49
2093	24	2020-07-10	08:00:00	18:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2094	24	2020-07-12	08:00:00	09:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2095	24	2020-07-13	08:00:00	02:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2096	24	2020-07-14	08:00:00	09:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2097	24	2020-07-16	08:00:00	09:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2098	24	2020-07-17	08:00:00	09:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2099	24	2020-07-19	08:00:00	09:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2100	24	2020-07-20	08:00:00	09:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2101	24	2020-07-21	08:00:00	09:00:00	f	2	0	2020-09-11 06:40:57	2020-09-11 06:40:57
2102	24	2020-07-23	08:00:00	09:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2103	24	2020-07-02	08:00:00	09:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2104	24	2020-07-03	08:00:00	09:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2105	24	2020-07-04	08:00:00	02:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2106	24	2020-07-05	08:00:00	06:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2107	24	2020-07-06	08:00:00	09:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2108	24	2020-07-07	08:00:00	09:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2109	24	2020-07-08	08:00:00	09:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2110	24	2020-07-01	08:00:00	10:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2111	24	2020-08-10	11:22:00	22:44:00	f	1	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2112	24	2020-08-11	11:22:00	22:44:00	f	1	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2113	24	2020-08-12	11:22:00	22:44:00	f	1	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2114	24	2020-08-13	11:22:00	22:44:00	f	1	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2115	24	2020-08-14	11:22:00	22:44:00	f	1	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2116	24	2020-08-19	12:00:00	23:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2117	24	2020-08-20	12:00:00	23:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2118	24	2020-08-21	12:00:00	23:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2119	24	2020-08-22	12:00:00	23:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2120	24	2020-08-04	10:00:00	22:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2121	24	2020-08-09	11:22:00	22:44:00	f	1	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2122	24	2020-08-06	10:00:00	22:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2123	24	2020-08-07	10:00:00	22:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2124	24	2020-08-08	10:00:00	22:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2125	24	2020-08-05	10:00:00	22:00:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2126	24	2020-09-14	01:02:00	03:04:00	f	2	0	2020-09-11 06:40:57	2020-09-11 06:40:57
2128	24	2020-09-16	01:02:00	03:04:00	f	2	0	2020-09-11 06:40:57	2020-09-11 06:40:57
2130	24	2020-09-18	01:02:00	03:04:00	f	2	0	2020-09-11 06:40:57	2020-09-11 06:40:57
2131	24	2020-09-19	01:02:00	03:04:00	f	2	0	2020-09-11 06:40:57	2020-09-11 06:40:57
2132	24	2020-09-21	04:02:00	12:04:00	f	1	0	2020-09-11 06:40:57	2020-09-11 06:40:57
2138	24	2020-09-28	01:02:00	03:02:00	f	1	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2129	24	2020-09-17	01:02:00	03:04:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2127	24	2020-09-15	01:02:00	03:04:00	f	2	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2135	24	2020-09-24	04:02:00	12:04:00	f	1	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2134	24	2020-09-23	04:02:00	12:04:00	f	1	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2133	24	2020-09-22	04:02:00	12:04:00	f	1	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2137	24	2020-09-26	04:02:00	12:04:00	f	1	1	2020-09-11 06:40:57	2020-09-11 06:40:57
2136	24	2020-09-25	04:02:00	12:04:00	f	1	1	2020-09-11 06:40:57	2020-09-11 06:40:57
\.


--
-- Name: schedules_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('schedules_id_seq', 2450, true);


--
-- Data for Name: sitter_profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY sitter_profiles (id, user_id, type_upload, contact_name, contact_address, contact_phone, contact_relationship, publish, deleted, remark, created_at, updated_at) FROM stdin;
12	29	3	qưee	qưeqưe	03641441412	eqw	t	f	\N	2020-07-04 06:17:14	2020-07-04 06:29:12
11	27	1	Yahada	NAKANO	1111111122	11122	t	f	\N	2020-07-03 05:33:59	2020-07-06 01:26:31
9	23	3	qweqweqwe	qweqweq	qweqweq	qweqweqwe	t	f	\N	2020-07-01 01:51:11	2020-07-30 00:20:11
14	34	3	te	te	03642455255	test	t	f	\N	2020-07-10 05:38:01	2020-07-10 07:32:28
15	36	2	Hoang Minh Thuan	4-12-7 nakano, tokyo	0135649928	It Me	t	f	\N	2020-07-10 07:27:09	2020-07-10 07:35:36
22	55	3	eweqwe	qweqweq	03642455255	qweqweq	f	f	\N	2020-07-30 03:09:52	2020-07-30 03:09:52
17	49	1	山田花子	東京都西新宿	0312345678	母	t	f	\N	2020-07-21 07:11:33	2020-07-30 04:10:42
21	53	1	山田花子	東京都西新宿	0312345678	母	t	f	\N	2020-07-29 04:57:04	2020-07-30 04:12:45
20	51	1	山田花子	東京都西新宿	0312345678	父	t	f	\N	2020-07-22 05:15:55	2020-07-30 04:14:06
23	56	1	山田花子	東京都西新宿	0312345678	母	t	f	\N	2020-07-30 04:31:08	2020-07-30 04:32:44
24	57	1	山田花子	東京都西新宿	0312345678	母	f	f	\N	2020-07-30 05:12:50	2020-07-30 07:44:28
16	38	4	ewqe	qưeqwe	03642455255	ưe	t	f	\N	2020-07-13 01:32:51	2020-08-12 05:22:36
25	58	2	Hoang Minh Thuan	1-5-7 nakano, tokyo	0135649928	It Me	t	f	\N	2020-07-30 05:16:18	2020-08-12 08:28:19
18	47	1	武志 MP	東京都千代田区１１１１	0312345678	母	t	f	\N	2020-07-22 00:05:05	2020-07-22 04:17:04
26	60	1	山田花子	東京都西新宿	0312345678	母	t	f	\N	2020-07-30 07:16:15	2020-09-16 00:53:48
27	70	1	山田花子	東京都西新宿	0312345678	母	f	f	\N	2020-08-03 08:12:21	2020-09-16 00:53:49
28	72	2	急時に登録者ご本人様と連絡が取れない場	456546	32423423333	antanochild	t	f	\N	2020-09-18 07:45:54	2020-09-18 07:46:51
19	50	2	bui toan	北四十条東	9012312331	３２１	t	f	\N	2020-07-22 00:26:11	2020-07-27 01:22:19
13	31	1	緊急時に登録者ご本人様と連絡が取れない場合	緊急連絡先住	緊急連絡先住	あなたとの関	t	f	\N	2020-07-06 07:27:13	2020-07-28 00:54:01
10	24	2	緊急時に登録者ご本人様と連絡が取	275817	675435678	4545764353	t	f	\N	2020-07-01 01:54:24	2020-07-28 01:19:52
\.


--
-- Name: sitter_profiles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('sitter_profiles_id_seq', 28, true);


--
-- Data for Name: sitter_reviews; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY sitter_reviews (id, sitter_id, employer_id, comment, rate, created_at, updated_at) FROM stdin;
1	60	39	ádadasdad\r\n角500文字以内\r\n※URL、HTMLタグ、メールアドレス、機種依存文字は投稿できません。\r\n※半角カタカナは、自動的に全角カタカナに\r\n角500文字以内\r\n※URL、HTMLタグ、メールアドレス、機種依存文字は投稿できません。\r\n※半角カタカナは、自動的に全角カタカナに\r\n角500文字以内\r\n※URL、HTMLタグ、メールアドレス、機種依存文字は投稿できません。\r\n※半角カタカナは、自動的に全角カタカナに\r\n角500文字以内\r\n※URL、HTMLタグ、メールアドレス、機種依存文字は投稿できません。\r\n※半角カタカナは、自動的に全角カタカナに\r\n角500文字以内\r\n※URL、HTMLタグ、メールアドレス、機種依存文字は投稿できません。\r\n※半角カタカナは、自動的に全角カタカナに	4.5	2020-08-18 08:31:32	2020-08-18 08:31:32
2	60	39	Đánh giá lần 2\r\nこの項目は必須です。\r\n※全角500文字以内\r\n※URL、HTMLタグ、メールアドレス、機種依存文字は投稿できません。\r\n※半角カタカナは、自動的に全角カタカナに変換して投稿されます。\r\nこの項目は必須です。\r\n※全角500文字以内\r\n※URL、HTMLタグ、メールアドレス、機種依存文字は投稿できません。\r\n※半角カタカナは、自動的に全角カタカナに変換して投稿されます。\r\nこの項目は必須です。\r\n※全角500文字以内\r\n※URL、HTMLタグ、メールアドレス、機種依存文字は投稿できません。\r\n※半角カタカナは、自動的に全角カタカナに変換して投稿されます。\r\nこの項目は必須です。\r\n※全角500文字以内\r\n※URL、HTMLタグ、メールアドレス、機種依存文字は投稿できません。\r\n※半角カタカナは、自動的に全角カタカナに変換して投稿されます。	1	2020-08-18 08:34:09	2020-08-18 08:34:09
3	29	37	321312	3	2020-08-18 08:56:52	2020-08-18 08:56:52
\.


--
-- Name: sitter_reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('sitter_reviews_id_seq', 3, true);


--
-- Data for Name: sitters; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY sitters (id, user_id, age, pref, city, kid_age_start, kid_qty, exp_parenting, exp_sitter, time_support, self_introduce, service_introduce, created_at, updated_at, kid_age_end, title, exp_kid_qty) FROM stdin;
5	27	30	静岡県	新宿区	4	\N	f	t	06:30:00	This is test script\r\n\r\ndasd\r\n\r\nasd\r\na\r\nasd	Test script 2213322\r\na\r\nsda\r\nsd\r\nasd\r\nasd	2020-07-03 05:36:09	2020-07-20 08:15:13	7	☆笑顔と個性を大切にサポートいたします☆ダンス・ストレッチ指導経験あり。	\N
7	36	40	東京都	世田谷区	6	3	t	t	04:00:00	テストテスト	誠心誠意真心込めてお世話致します。	2020-07-10 07:28:56	2020-09-17 08:16:10	48	☆笑顔と個性を大切にサポートいたします☆\r\ntitle	3
4	24	20	青森県	bà rịa vũng tàu	3	3	t	t	07:00:00	自己紹介自己紹介自己紹介自己紹介自己紹介自己紹介	サービス内容サービス内容サービス内容サービス内容サービス内容	2020-07-01 01:56:27	2020-09-11 06:40:57	5	☆笑顔と個性を大切にサポートいたします☆ダンス・ストレッチ指導経験あり。	4
14	57	20	石川県	加賀市	1	1	t	t	05:30:00	はじめまして！	よろしくお願いいたします。	2020-07-30 05:30:35	2020-07-30 05:30:35	48	笑顔で頑張ります！	\N
8	50	40	北海道	wewqew	2	\N	f	t	06:30:00	eqwewqe	qweqwe	2020-07-22 00:34:49	2020-07-28 00:22:55	5	day la hinh nah	\N
9	51	20	愛媛県	大洲市	1	2	t	t	05:00:00	テスト	テスト	2020-07-22 05:32:21	2020-07-22 05:32:21	60	楽しく丁寧にサポートいたします！	\N
10	34	30	宮城県	eqwe	2	\N	f	t	02:30:00	sa	ASDASD	2020-07-27 00:23:24	2020-07-27 00:23:24	7	tesst	\N
11	31	20	青森県	354356	2	1	t	t	07:00:00	gfhfhgfh	fghfghfgh	2020-07-28 01:00:52	2020-07-28 01:03:22	2	xcfgsdfgsdfsdf	\N
13	56	30	兵庫県	神戸市西区	1	2	t	t	04:00:00	はじめまして！	送迎サポートから簡単な調理までお任せください！	2020-07-30 04:42:57	2020-07-30 04:56:22	48	笑顔で子供たちと接することを心がけています☆	\N
15	60	50	東京都	新宿区	1	2	t	t	04:00:00	はじめまして！	よろしくお願いいたします！	2020-07-30 07:35:38	2020-08-12 05:36:24	72	何でもお気軽にご相談ください	2
12	53	20	高知県	宿毛市	1	2	t	f	04:00:00	保育士経験が2年あります。\r\n◎コロナで学校、幼稚園、保育園に行けなくてもお家で楽しく過ごせるよう、クッキングや制作活動等行いたいと思います！ご希望の方はお気軽にメッセージ等でご相談ください！◎\r\n★早朝、夜中の時間帯もお気軽にどうぞ！★\r\n\r\nよろしくお願いいたします。	経験を活かして、\r\n絵、製作、折り紙、手遊び、絵本読み聞かせ、簡単な英語、運動、、、など、お子さまの興味や年齢に応じた遊びをしてお子さまと楽しい時間を過ごせたらと、思っております！\r\n安全第一でお母さまとお子さまを笑顔にしたいと思っております！	2020-07-29 05:33:23	2020-08-31 05:20:58	60	丁寧なサービスを心がけます！！	2
16	38	40	岩手県	qweqwe	4	4	t	t	03:30:00	alo	ali	2020-07-31 08:14:21	2020-08-12 05:22:05	4	test	3
6	29	40	青森県	shinjuku, nakano	36	5	t	f	05:30:00	※新型コロナウイルス流行中の為、日常生活の中でマスクの装着や手洗いうがいを徹底し\r\n衛生に配慮をしています※\r\n\r\n子育て歴15年以上！ シッター歴3年以上！\r\n子育て支援員、幼保無償化シッターです。\r\n赤ちゃん大好きです！\r\n（乳児保育の経験豊富です！）\r\n認可保育園で保育補助をしながらフリーランスのベビーシッターをしております。\r\n子、孫育ての経験から誠心誠意お手伝いいたします。\r\n\r\n〝お子様にとって人生の大切な時期である幼少期にママ以外に 自分を愛してくれる存在だ\r\nったと大人になってからも 幸せな思い出となる存在 〟\r\n\r\nそんなベビーシッターを目指していきたいです！\r\n\r\nこれまでの子育てや学びの経験が皆さまのお役に立てることがとても嬉しいです！\r\n豊かな経験を有し、お子様に寄り添うように慈しむように、お世話をさせていただきます	ご相談に応じまして夜間や早朝 お泊まりなども可能な時もあります。\r\nお子様の目線に合わせた保育を心がけ 保護者様のお気持ちに添える様なシッターをしたい\r\nと思っています。プロフィールには対応のお子様が1名となっていますが 2名までシッター\r\n可能です。	2020-07-04 06:31:46	2020-09-04 02:37:49	96	※新型コロナウイルス流行中の為、日常生活の中でマスクの装着や手洗いうがいを徹底し衛生に配慮をしています衛生に配慮をしています衛生に配慮をしています衛生に配慮をしています衛生に配慮をしています衛生に	4
17	72	20	青森県	1250	2	1	f	f	01:30:00	Nội dung 自己紹介	NDDDDDD  サービス内容	2020-09-18 07:51:45	2020-09-18 07:51:45	3	xin chào tôi là xxxxxxxxxxxxxx	\N
\.


--
-- Name: sitters_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('sitters_id_seq', 17, true);


--
-- Data for Name: skills; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY skills (id, name, remark, created_at, updated_at) FROM stdin;
1	送迎サポート	\N	2020-06-25 08:27:34	2020-06-25 08:27:34
2	簡単な料理（離乳食等の温めのみ）	\N	2020-06-25 08:27:34	2020-06-25 08:27:34
3	早期対応	\N	2020-06-25 08:27:34	2020-06-25 08:27:34
4	夜間対応	\N	2020-06-25 08:27:34	2020-06-25 08:27:34
5	子育て経験	\N	2020-06-25 08:27:34	2020-06-25 08:27:34
6	病児	\N	2020-06-25 08:27:34	2020-06-25 08:27:34
7	病後児	\N	2020-06-25 08:27:34	2020-06-25 08:27:34
8	音楽レッスン	\N	2020-06-25 08:27:34	2020-06-25 08:27:34
9	スポーツレッスン	\N	2020-06-25 08:27:34	2020-06-25 08:27:34
10	定期予約	\N	2020-06-25 08:27:34	2020-06-25 08:27:34
11	簡単な家事	\N	2020-06-25 08:27:34	2020-06-25 08:27:34
12	英語対応	\N	2020-06-25 08:27:34	2020-06-25 08:27:34
13	お泊まり保育	\N	2020-06-25 08:27:34	2020-06-25 08:27:34
14	絵、工作レッスン	\N	2020-06-25 08:27:34	2020-06-25 08:27:34
15	ペットのお世話	\N	2020-06-25 08:27:34	2020-06-25 08:27:34
17	障がい児	\N	2020-06-25 08:27:34	2020-06-25 08:27:34
18	お子様の撮影	\N	2020-06-25 08:27:34	2020-06-25 08:27:34
19	爪きり	\N	2020-06-25 08:27:34	2020-06-25 08:27:34
20	耳や鼻のお手入れ	\N	2020-06-25 08:27:34	2020-06-25 08:27:34
21	ベビーマッサージ	\N	2020-06-25 08:27:34	2020-06-25 08:27:34
22	お散歩	\N	2020-06-25 08:27:34	2020-06-25 08:27:34
23	沐浴	\N	2020-06-25 08:27:34	2020-06-25 08:27:34
24	産前・産後サポート	\N	2020-06-25 08:27:34	2020-06-25 08:27:34
25	小学生サポート	\N	2020-06-25 08:27:34	2020-06-25 08:27:34
26	中学生サポート	\N	2020-06-25 08:27:34	2020-06-25 08:27:34
\.


--
-- Name: skills_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('skills_id_seq', 26, true);


--
-- Data for Name: token_refeshes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY token_refeshes (id, user_id, token, detect, created_at, updated_at) FROM stdin;
1	1	hung2fefb83a1a9d0f6b7c0280707a388005	sfsfdsdfsd	2020-06-25 08:27:34	2020-06-25 08:27:34
2	1	hung2fefb83a1a9d0f6b7c0280707a388005	sfsfdsdfsd	2020-06-25 08:27:34	2020-06-25 08:27:34
13	22	bd9d632eccb7a30716d1febc7d9afb	{"browser":"Chrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"10"}	2020-07-01 01:39:55	2020-07-01 01:39:55
14	23	8f1de0ce06777396f6d98f03d12254	{"browser":"Chrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"10"}	2020-07-01 01:51:27	2020-07-01 01:51:27
15	24	30fdcc3182d998efa9bd84c070ddb1	{"browser":"Chrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"10"}	2020-07-01 01:54:31	2020-07-01 01:54:31
16	24	30fdcc3182d998efa9bd84c070ddb1	{"browser":"Firefox","browserMajorVersion":"77","browserVersion":"77.0","os":"Windows","osVersion":"10"}	2020-07-01 02:17:29	2020-07-01 02:17:29
17	26	cdc338ac5240f0728abafc93bb56bc	{"browser":"Chrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"10"}	2020-07-02 01:58:00	2020-07-02 01:58:00
18	1	c4804022000eeee476faf8492eec54	{"browser":"Chrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"10"}	2020-07-02 02:21:17	2020-07-02 02:21:17
19	24	30fdcc3182d998efa9bd84c070ddb1	{"browser":"NetscapeFirefox","browserMajorVersion":"77","browserVersion":"77.0","os":"Windows","osVersion":"10"}	2020-07-03 05:30:19	2020-07-03 05:30:19
20	27	c5ab843c164da9d9c707934a30ae54	{"browser":"Chrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"10"}	2020-07-03 05:35:00	2020-07-03 05:35:00
21	1	c4804022000eeee476faf8492eec54	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"10"}	2020-07-03 05:45:30	2020-07-03 05:45:30
22	27	c5ab843c164da9d9c707934a30ae54	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"10"}	2020-07-03 06:34:56	2020-07-03 06:34:56
23	27	c5ab843c164da9d9c707934a30ae54	{"browser":"Chrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"7"}	2020-07-03 06:37:11	2020-07-03 06:37:11
24	28	3c8289df6a83332ebd33e9805e9672	{"browser":"Chrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"7"}	2020-07-03 06:41:11	2020-07-03 06:41:11
25	22	bd9d632eccb7a30716d1febc7d9afb	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"10"}	2020-07-03 07:51:33	2020-07-03 07:51:33
26	26	cdc338ac5240f0728abafc93bb56bc	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"10"}	2020-07-03 08:18:34	2020-07-03 08:18:34
27	22	bd9d632eccb7a30716d1febc7d9afb	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Mac OS X","osVersion":"10_15_4"}	2020-07-04 04:56:18	2020-07-04 04:56:18
28	29	ada41c9526bb2d2c945dfae7f5e564	{"browser":"NetscapeChrome","browserMajorVersion":"81","browserVersion":"81.0.4044.138","os":"Linux","osVersion":"unknown"}	2020-07-04 06:17:29	2020-07-04 06:17:29
29	27	c5ab843c164da9d9c707934a30ae54	{"browser":"NetscapeChrome","browserMajorVersion":"81","browserVersion":"81.0.4044.129","os":"Mac OS X","osVersion":"10_15_5"}	2020-07-05 08:01:34	2020-07-05 08:01:34
30	27	c5ab843c164da9d9c707934a30ae54	{"browser":"NetscapeMicrosoft Edge","browserMajorVersion":"18","browserVersion":"18.18362","os":"Windows","osVersion":"10"}	2020-07-05 23:53:13	2020-07-05 23:53:13
31	27	c5ab843c164da9d9c707934a30ae54	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"7"}	2020-07-06 00:04:29	2020-07-06 00:04:29
32	29	ada41c9526bb2d2c945dfae7f5e564	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"10"}	2020-07-06 00:16:23	2020-07-06 00:16:23
33	28	3c8289df6a83332ebd33e9805e9672	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"10"}	2020-07-06 00:37:14	2020-07-06 00:37:14
34	29	ada41c9526bb2d2c945dfae7f5e564	{"browser":"NetscapeFirefox","browserMajorVersion":"78","browserVersion":"78.0","os":"Windows","osVersion":"10"}	2020-07-06 02:42:23	2020-07-06 02:42:23
35	24	30fdcc3182d998efa9bd84c070ddb1	{"browser":"NetscapeFirefox","browserMajorVersion":"78","browserVersion":"78.0","os":"Windows","osVersion":"10"}	2020-07-06 07:07:12	2020-07-06 07:07:12
36	31	6f1d827f067f715e565bb86bfa63ac	{"browser":"NetscapeFirefox","browserMajorVersion":"78","browserVersion":"78.0","os":"Windows","osVersion":"10"}	2020-07-06 07:27:18	2020-07-06 07:27:18
37	1	c4804022000eeee476faf8492eec54	{"browser":"NetscapeMicrosoft Edge","browserMajorVersion":"3","browserVersion":"3.0.478.58","os":"Windows","osVersion":"10"}	2020-07-08 05:01:53	2020-07-08 05:01:53
38	1	c4804022000eeee476faf8492eec54	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.106","os":"Android","osVersion":"9"}	2020-07-09 09:08:23	2020-07-09 09:08:23
39	24	30fdcc3182d998efa9bd84c070ddb1	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.106","os":"Android","osVersion":"9"}	2020-07-09 09:13:48	2020-07-09 09:13:48
40	22	bd9d632eccb7a30716d1febc7d9afb	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.106","os":"Android","osVersion":"9"}	2020-07-10 03:55:47	2020-07-10 03:55:47
41	34	b27ddc600a8a89636a4056943b22cb	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"10"}	2020-07-10 05:38:31	2020-07-10 05:38:31
42	26	cdc338ac5240f0728abafc93bb56bc	{"browser":"NetscapeMicrosoft Edge","browserMajorVersion":"3","browserVersion":"3.0.478.61","os":"Windows","osVersion":"10"}	2020-07-10 06:55:40	2020-07-10 06:55:40
43	1	c4804022000eeee476faf8492eec54	{"browser":"NetscapeSafari","browserMajorVersion":"13","browserVersion":"13.0.3","os":"iOS","osVersion":"13.2.3"}	2020-07-10 06:58:13	2020-07-10 06:58:13
44	1	c4804022000eeee476faf8492eec54	{"browser":"NetscapeSafari","browserMajorVersion":"11","browserVersion":"11.0","os":"iOS","osVersion":"11.0.0"}	2020-07-10 07:02:21	2020-07-10 07:02:21
45	1	c4804022000eeee476faf8492eec54	{"browser":"NetscapeMicrosoft Edge","browserMajorVersion":"3","browserVersion":"3.0.478.61","os":"Windows","osVersion":"10"}	2020-07-10 07:12:36	2020-07-10 07:12:36
46	36	673e0d5ee759607279f8bb09d723ff	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"10"}	2020-07-10 07:27:16	2020-07-10 07:27:16
47	37	142888a48b2902c47db0ac02019162	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"10"}	2020-07-10 07:28:08	2020-07-10 07:28:08
48	38	d14b693851b43a864776c5e568823a	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"10"}	2020-07-13 01:33:03	2020-07-13 01:33:03
49	24	30fdcc3182d998efa9bd84c070ddb1	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"10"}	2020-07-13 07:23:00	2020-07-13 07:23:00
50	32	379d58eb560ec19138f1f2fb2dee3c	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"10"}	2020-07-13 07:25:50	2020-07-13 07:25:50
51	1	c4804022000eeee476faf8492eec54	{"browser":"NetscapeMicrosoft Edge","browserMajorVersion":"3","browserVersion":"3.0.478.64","os":"Windows","osVersion":"10"}	2020-07-15 00:32:58	2020-07-15 00:32:58
52	33	ca12a4c54f854fd3992beaa83635e7	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"10"}	2020-07-15 05:35:00	2020-07-15 05:35:00
53	1	c4804022000eeee476faf8492eec54	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"7"}	2020-07-15 07:23:28	2020-07-15 07:23:28
54	36	673e0d5ee759607279f8bb09d723ff	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"7"}	2020-07-16 01:35:36	2020-07-16 01:35:36
55	39	8dc20c428b58d8143d714cc787884d	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"10"}	2020-07-16 04:34:26	2020-07-16 04:34:26
56	37	142888a48b2902c47db0ac02019162	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"7"}	2020-07-16 05:34:55	2020-07-16 05:34:55
57	36	673e0d5ee759607279f8bb09d723ff	{"browser":"NetscapeSafari","browserMajorVersion":"10","browserVersion":"10.0","os":"iOS","osVersion":"10.3.1"}	2020-07-16 06:46:45	2020-07-16 06:46:45
58	29	ada41c9526bb2d2c945dfae7f5e564	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.89","os":"Windows","osVersion":"10"}	2020-07-20 00:47:08	2020-07-20 00:47:08
59	27	c5ab843c164da9d9c707934a30ae54	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.89","os":"Windows","osVersion":"10"}	2020-07-20 01:00:35	2020-07-20 01:00:35
60	36	673e0d5ee759607279f8bb09d723ff	{"browser":"NetscapeMicrosoft Edge","browserMajorVersion":"4","browserVersion":"4.0.522.40","os":"Windows","osVersion":"10"}	2020-07-20 05:18:44	2020-07-20 05:18:44
61	33	ca12a4c54f854fd3992beaa83635e7	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.89","os":"Windows","osVersion":"10"}	2020-07-20 06:37:41	2020-07-20 06:37:41
62	44	cfc387b20cc0a68407f5285859ba62	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"10"}	2020-07-20 08:13:04	2020-07-20 08:13:04
63	1	c4804022000eeee476faf8492eec54	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.89","os":"Windows","osVersion":"10"}	2020-07-21 01:51:43	2020-07-21 01:51:43
64	44	cfc387b20cc0a68407f5285859ba62	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.89","os":"Windows","osVersion":"10"}	2020-07-21 01:52:12	2020-07-21 01:52:12
65	45	8b9c1e099f4c91765d75a958faa9e5	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"10"}	2020-07-21 02:17:31	2020-07-21 02:17:31
66	46	c527b8185da10151932aa562258a5b	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.89","os":"Windows","osVersion":"10"}	2020-07-21 02:32:24	2020-07-21 02:32:24
67	36	673e0d5ee759607279f8bb09d723ff	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.89","os":"Windows","osVersion":"10"}	2020-07-21 02:43:06	2020-07-21 02:43:06
68	34	b27ddc600a8a89636a4056943b22cb	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.89","os":"Windows","osVersion":"10"}	2020-07-21 02:50:14	2020-07-21 02:50:14
69	49	fb9539b7bf29533b5712b4e03c1bee	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"10"}	2020-07-21 07:12:07	2020-07-21 07:12:07
70	49	fb9539b7bf29533b5712b4e03c1bee	{"browser":"NetscapeMicrosoft Edge","browserMajorVersion":"4","browserVersion":"4.0.522.40","os":"Windows","osVersion":"10"}	2020-07-21 07:24:34	2020-07-21 07:24:34
71	49	fb9539b7bf29533b5712b4e03c1bee	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.89","os":"Windows","osVersion":"10"}	2020-07-21 23:58:42	2020-07-21 23:58:42
72	24	30fdcc3182d998efa9bd84c070ddb1	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.89","os":"Windows","osVersion":"10"}	2020-07-22 00:25:08	2020-07-22 00:25:08
73	50	31366c20167c04557e9e39d3d77bb8	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.89","os":"Windows","osVersion":"10"}	2020-07-22 00:26:17	2020-07-22 00:26:17
74	37	142888a48b2902c47db0ac02019162	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.89","os":"Windows","osVersion":"10"}	2020-07-22 02:15:57	2020-07-22 02:15:57
75	51	b4f40c856549cffb0040250a0a9c86	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"10"}	2020-07-22 05:16:34	2020-07-22 05:16:34
76	52	53937202c8f35f5983cad31d14a9f7	{"browser":"NetscapeChrome","browserMajorVersion":"83","browserVersion":"83.0.4103.116","os":"Windows","osVersion":"10"}	2020-07-22 05:54:38	2020-07-22 05:54:38
77	22	bd9d632eccb7a30716d1febc7d9afb	{"browser":"NetscapeFirefox","browserMajorVersion":"78","browserVersion":"78.0","os":"Windows","osVersion":"10"}	2020-07-22 06:03:17	2020-07-22 06:03:17
78	22	bd9d632eccb7a30716d1febc7d9afb	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.89","os":"Windows","osVersion":"10"}	2020-07-22 07:03:43	2020-07-22 07:03:43
79	22	bd9d632eccb7a30716d1febc7d9afb	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.89","os":"Mac OS X","osVersion":"10_15_4"}	2020-07-25 07:46:48	2020-07-25 07:46:48
80	38	d14b693851b43a864776c5e568823a	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.89","os":"Windows","osVersion":"10"}	2020-07-27 07:34:24	2020-07-27 07:34:24
81	22	bd9d632eccb7a30716d1febc7d9afb	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.105","os":"Windows","osVersion":"10"}	2020-07-27 23:58:49	2020-07-27 23:58:49
82	1	c4804022000eeee476faf8492eec54	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.89","os":"Windows","osVersion":"7"}	2020-07-28 00:12:44	2020-07-28 00:12:44
83	1	c4804022000eeee476faf8492eec54	{"browser":"NetscapeCocCoc","browserMajorVersion":"5","browserVersion":"5","os":"Windows","osVersion":"10"}	2020-07-28 00:53:28	2020-07-28 00:53:28
84	26	cdc338ac5240f0728abafc93bb56bc	{"browser":"NetscapeMicrosoft Edge","browserMajorVersion":"4","browserVersion":"4.0.522.44","os":"Windows","osVersion":"10"}	2020-07-28 08:52:35	2020-07-28 08:52:35
85	1	c4804022000eeee476faf8492eec54	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.105","os":"Windows","osVersion":"10"}	2020-07-29 05:03:23	2020-07-29 05:03:23
86	53	72331585bebb19354c926e3bbdc613	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.105","os":"Windows","osVersion":"10"}	2020-07-29 05:21:16	2020-07-29 05:21:16
87	52	11046821757f3ff197eae70530c439	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.105","os":"Windows","osVersion":"10"}	2020-07-29 05:36:44	2020-07-29 05:36:44
88	54	bd50e06510e2323599f76409d339d4	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.105","os":"Windows","osVersion":"10"}	2020-07-29 05:43:36	2020-07-29 05:43:36
89	39	8dc20c428b58d8143d714cc787884d	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.105","os":"Windows","osVersion":"10"}	2020-07-29 05:54:03	2020-07-29 05:54:03
90	37	142888a48b2902c47db0ac02019162	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.105","os":"Windows","osVersion":"10"}	2020-07-29 07:15:37	2020-07-29 07:15:37
91	56	2e9ab653d66dc5469010480ce9c784	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.105","os":"Windows","osVersion":"10"}	2020-07-30 04:33:08	2020-07-30 04:33:08
92	57	2b7bf8a76c9c262686aee55b6c435a	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.105","os":"Windows","osVersion":"10"}	2020-07-30 05:19:49	2020-07-30 05:19:49
93	29	ada41c9526bb2d2c945dfae7f5e564	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.105","os":"Windows","osVersion":"10"}	2020-07-30 05:46:34	2020-07-30 05:46:34
94	60	f5d9eb637a21cafe9f82e1baa69505	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.105","os":"Windows","osVersion":"10"}	2020-07-30 07:31:25	2020-07-30 07:31:25
95	58	bc1b9ea815992dae33d0b54b7dd2ea	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.105","os":"Windows","osVersion":"10"}	2020-07-30 08:24:03	2020-07-30 08:24:03
96	36	673e0d5ee759607279f8bb09d723ff	{"browser":"NetscapeSafari","browserMajorVersion":"11","browserVersion":"11.0","os":"iOS","osVersion":"11.2.6"}	2020-07-30 08:34:04	2020-07-30 08:34:04
97	37	142888a48b2902c47db0ac02019162	{"browser":"NetscapeSafari","browserMajorVersion":"11","browserVersion":"11.0","os":"iOS","osVersion":"11.2.6"}	2020-07-30 08:42:43	2020-07-30 08:42:43
98	37	142888a48b2902c47db0ac02019162	{"browser":"NetscapeSafari","browserMajorVersion":"13","browserVersion":"13.1.1","os":"iOS","osVersion":"13.5.1"}	2020-07-30 09:13:09	2020-07-30 09:13:09
99	36	673e0d5ee759607279f8bb09d723ff	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.105","os":"Windows","osVersion":"10"}	2020-07-31 02:06:18	2020-07-31 02:06:18
100	22	bd9d632eccb7a30716d1febc7d9afb	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.105","os":"Android","osVersion":"6.0"}	2020-07-31 08:07:39	2020-07-31 08:07:39
101	37	142888a48b2902c47db0ac02019162	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.111","os":"Android","osVersion":"10"}	2020-07-31 08:10:33	2020-07-31 08:10:33
102	38	d14b693851b43a864776c5e568823a	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.105","os":"Android","osVersion":"8.0.0"}	2020-07-31 08:11:41	2020-07-31 08:11:41
103	60	f5d9eb637a21cafe9f82e1baa69505	{"browser":"NetscapeMicrosoft Edge","browserMajorVersion":"4","browserVersion":"4.0.522.49","os":"Windows","osVersion":"10"}	2020-07-31 09:11:33	2020-07-31 09:11:33
104	29	ada41c9526bb2d2c945dfae7f5e564	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.111","os":"Android","osVersion":"8.0.0"}	2020-08-03 01:11:41	2020-08-03 01:11:41
105	36	673e0d5ee759607279f8bb09d723ff	{"browser":"NetscapeSafari","browserMajorVersion":"13","browserVersion":"13.1.1","os":"iOS","osVersion":"13.5.1"}	2020-08-03 06:44:30	2020-08-03 06:44:30
106	69	67c5dd1b9c06d3dac7667dafb66091	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.111","os":"Android","osVersion":"10"}	2020-08-03 07:08:55	2020-08-03 07:08:55
107	69	67c5dd1b9c06d3dac7667dafb66091	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.105","os":"Windows","osVersion":"10"}	2020-08-03 07:29:07	2020-08-03 07:29:07
108	29	ada41c9526bb2d2c945dfae7f5e564	{"browser":"NetscapeSafari","browserMajorVersion":"10","browserVersion":"10.0","os":"iOS","osVersion":"10.3.1"}	2020-08-03 08:41:22	2020-08-03 08:41:22
109	37	142888a48b2902c47db0ac02019162	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.105","os":"Windows","osVersion":"7"}	2020-08-05 04:39:38	2020-08-05 04:39:38
110	36	673e0d5ee759607279f8bb09d723ff	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.105","os":"Windows","osVersion":"7"}	2020-08-05 05:35:09	2020-08-05 05:35:09
111	1	c4804022000eeee476faf8492eec54	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.105","os":"Windows","osVersion":"7"}	2020-08-06 01:28:45	2020-08-06 01:28:45
112	29	ada41c9526bb2d2c945dfae7f5e564	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.105","os":"Linux","osVersion":"unknown"}	2020-08-07 02:08:10	2020-08-07 02:08:10
113	45	8b9c1e099f4c91765d75a958faa9e5	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.105","os":"Windows","osVersion":"10"}	2020-08-11 08:37:09	2020-08-11 08:37:09
114	29	ada41c9526bb2d2c945dfae7f5e564	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.125","os":"Windows","osVersion":"10"}	2020-08-12 01:40:19	2020-08-12 01:40:19
115	38	d14b693851b43a864776c5e568823a	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.105","os":"Windows","osVersion":"10"}	2020-08-12 05:20:13	2020-08-12 05:20:13
116	1	c4804022000eeee476faf8492eec54	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.125","os":"Windows","osVersion":"10"}	2020-08-12 08:11:52	2020-08-12 08:11:52
117	29	ada41c9526bb2d2c945dfae7f5e564	{"browser":"NetscapeSafari","browserMajorVersion":"13","browserVersion":"13.1","os":"Mac OS X","osVersion":"10_14_6"}	2020-08-13 05:05:01	2020-08-13 05:05:01
118	45	8b9c1e099f4c91765d75a958faa9e5	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.125","os":"Windows","osVersion":"10"}	2020-08-14 04:13:41	2020-08-14 04:13:41
119	60	f5d9eb637a21cafe9f82e1baa69505	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.125","os":"Windows","osVersion":"10"}	2020-08-14 04:14:29	2020-08-14 04:14:29
120	22	bd9d632eccb7a30716d1febc7d9afb	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.125","os":"Windows","osVersion":"10"}	2020-08-14 04:43:14	2020-08-14 04:43:14
121	36	673e0d5ee759607279f8bb09d723ff	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.125","os":"Windows","osVersion":"7"}	2020-08-17 02:18:58	2020-08-17 02:18:58
122	37	142888a48b2902c47db0ac02019162	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.125","os":"Windows","osVersion":"10"}	2020-08-17 04:58:01	2020-08-17 04:58:01
123	52	11046821757f3ff197eae70530c439	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.125","os":"Windows","osVersion":"10"}	2020-08-17 05:02:46	2020-08-17 05:02:46
124	39	8dc20c428b58d8143d714cc787884d	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.125","os":"Windows","osVersion":"10"}	2020-08-18 08:31:03	2020-08-18 08:31:03
125	33	ca12a4c54f854fd3992beaa83635e7	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.125","os":"Windows","osVersion":"10"}	2020-08-18 08:40:06	2020-08-18 08:40:06
126	37	142888a48b2902c47db0ac02019162	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.125","os":"Windows","osVersion":"7"}	2020-08-18 08:47:21	2020-08-18 08:47:21
127	37	142888a48b2902c47db0ac02019162	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.135","os":"Windows","osVersion":"10"}	2020-08-19 04:21:15	2020-08-19 04:21:15
128	29	ada41c9526bb2d2c945dfae7f5e564	{"browser":"NetscapeCocCoc","browserMajorVersion":"5","browserVersion":"5","os":"Windows","osVersion":"10"}	2020-08-20 06:04:41	2020-08-20 06:04:41
129	1	c4804022000eeee476faf8492eec54	{"browser":"NetscapeMicrosoft Edge","browserMajorVersion":"4","browserVersion":"4.0.522.61","os":"Windows","osVersion":"10"}	2020-08-21 05:07:10	2020-08-21 05:07:10
130	1	c4804022000eeee476faf8492eec54	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.135","os":"Windows","osVersion":"10"}	2020-08-21 08:02:43	2020-08-21 08:02:43
131	33	ca12a4c54f854fd3992beaa83635e7	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.135","os":"Windows","osVersion":"10"}	2020-08-21 08:03:14	2020-08-21 08:03:14
132	58	bc1b9ea815992dae33d0b54b7dd2ea	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.125","os":"Windows","osVersion":"10"}	2020-08-21 08:07:35	2020-08-21 08:07:35
133	29	ada41c9526bb2d2c945dfae7f5e564	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.135","os":"Windows","osVersion":"10"}	2020-08-21 08:14:49	2020-08-21 08:14:49
134	29	ada41c9526bb2d2c945dfae7f5e564	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.125","os":"Android","osVersion":"9"}	2020-08-24 04:58:14	2020-08-24 04:58:14
135	53	72331585bebb19354c926e3bbdc613	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.135","os":"Windows","osVersion":"10"}	2020-08-25 00:05:29	2020-08-25 00:05:29
136	52	11046821757f3ff197eae70530c439	{"browser":"NetscapeChrome","browserMajorVersion":"84","browserVersion":"84.0.4147.135","os":"Windows","osVersion":"10"}	2020-08-25 00:13:23	2020-08-25 00:13:23
137	29	ada41c9526bb2d2c945dfae7f5e564	{"browser":"NetscapeMicrosoft Edge","browserMajorVersion":"4","browserVersion":"4.0.522.63","os":"Windows","osVersion":"10"}	2020-08-25 08:16:59	2020-08-25 08:16:59
138	29	ada41c9526bb2d2c945dfae7f5e564	{"browser":"NetscapeMicrosoft Edge","browserMajorVersion":"4","browserVersion":"4.0.522.63","os":"Android","osVersion":"6.0"}	2020-08-25 09:09:04	2020-08-25 09:09:04
139	33	ca12a4c54f854fd3992beaa83635e7	{"browser":"NetscapeMicrosoft Edge","browserMajorVersion":"4","browserVersion":"4.0.522.63","os":"Windows","osVersion":"10"}	2020-08-25 09:25:47	2020-08-25 09:25:47
140	26	cdc338ac5240f0728abafc93bb56bc	{"browser":"NetscapeChrome","browserMajorVersion":"85","browserVersion":"85.0.4183.83","os":"Windows","osVersion":"10"}	2020-08-28 07:34:47	2020-08-28 07:34:47
141	24	30fdcc3182d998efa9bd84c070ddb1	{"browser":"NetscapeFirefox","browserMajorVersion":"79","browserVersion":"79.0","os":"Windows","osVersion":"10"}	2020-08-31 04:57:47	2020-08-31 04:57:47
142	36	673e0d5ee759607279f8bb09d723ff	{"browser":"NetscapeChrome","browserMajorVersion":"85","browserVersion":"85.0.4183.83","os":"Windows","osVersion":"10"}	2020-09-07 02:41:51	2020-09-07 02:41:51
143	33	ca12a4c54f854fd3992beaa83635e7	{"browser":"NetscapeChrome","browserMajorVersion":"85","browserVersion":"85.0.4183.83","os":"Windows","osVersion":"10"}	2020-09-07 03:00:47	2020-09-07 03:00:47
144	37	142888a48b2902c47db0ac02019162	{"browser":"NetscapeChrome","browserMajorVersion":"85","browserVersion":"85.0.4183.83","os":"Windows","osVersion":"10"}	2020-09-07 04:02:01	2020-09-07 04:02:01
145	44	cfc387b20cc0a68407f5285859ba62	{"browser":"NetscapeChrome","browserMajorVersion":"85","browserVersion":"85.0.4183.83","os":"Windows","osVersion":"10"}	2020-09-07 04:18:53	2020-09-07 04:18:53
146	37	142888a48b2902c47db0ac02019162	{"browser":"NetscapeChrome","browserMajorVersion":"85","browserVersion":"85.0.4183.83","os":"Windows","osVersion":"7"}	2020-09-08 00:45:36	2020-09-08 00:45:36
147	29	ada41c9526bb2d2c945dfae7f5e564	{"browser":"NetscapeChrome","browserMajorVersion":"85","browserVersion":"85.0.4183.83","os":"Windows","osVersion":"10"}	2020-09-08 00:48:13	2020-09-08 00:48:13
148	1	c4804022000eeee476faf8492eec54	{"browser":"NetscapeChrome","browserMajorVersion":"85","browserVersion":"85.0.4183.83","os":"Windows","osVersion":"10"}	2020-09-08 01:00:03	2020-09-08 01:00:03
149	37	142888a48b2902c47db0ac02019162	{"browser":"NetscapeSafari","browserMajorVersion":"13","browserVersion":"13.0.3","os":"iOS","osVersion":"13.2.3"}	2020-09-08 07:43:43	2020-09-08 07:43:43
150	36	673e0d5ee759607279f8bb09d723ff	{"browser":"NetscapeChrome","browserMajorVersion":"85","browserVersion":"85.0.4183.102","os":"Windows","osVersion":"7"}	2020-09-10 02:42:38	2020-09-10 02:42:38
151	24	30fdcc3182d998efa9bd84c070ddb1	{"browser":"NetscapeChrome","browserMajorVersion":"85","browserVersion":"85.0.4183.102","os":"Windows","osVersion":"10"}	2020-09-11 05:18:02	2020-09-11 05:18:02
152	24	30fdcc3182d998efa9bd84c070ddb1	{"browser":"NetscapeFirefox","browserMajorVersion":"80","browserVersion":"80.0","os":"Windows","osVersion":"10"}	2020-09-11 06:39:29	2020-09-11 06:39:29
153	22	bd9d632eccb7a30716d1febc7d9afb	{"browser":"NetscapeChrome","browserMajorVersion":"85","browserVersion":"85.0.4183.102","os":"Windows","osVersion":"10"}	2020-09-11 06:48:31	2020-09-11 06:48:31
154	37	142888a48b2902c47db0ac02019162	{"browser":"NetscapeChrome","browserMajorVersion":"85","browserVersion":"85.0.4183.102","os":"Windows","osVersion":"7"}	2020-09-11 06:49:29	2020-09-11 06:49:29
155	37	142888a48b2902c47db0ac02019162	{"browser":"NetscapeChrome","browserMajorVersion":"85","browserVersion":"85.0.4183.83","os":"Android","osVersion":"6.0"}	2020-09-11 07:21:43	2020-09-11 07:21:43
156	23	8f1de0ce06777396f6d98f03d12254	{"browser":"NetscapeChrome","browserMajorVersion":"85","browserVersion":"85.0.4183.83","os":"Windows","osVersion":"10"}	2020-09-14 00:58:01	2020-09-14 00:58:01
157	26	cdc338ac5240f0728abafc93bb56bc	{"browser":"NetscapeChrome","browserMajorVersion":"85","browserVersion":"85.0.4183.102","os":"Windows","osVersion":"10"}	2020-09-14 05:02:04	2020-09-14 05:02:04
158	36	673e0d5ee759607279f8bb09d723ff	{"browser":"NetscapeChrome","browserMajorVersion":"85","browserVersion":"85.0.4183.102","os":"Windows","osVersion":"10"}	2020-09-15 00:33:01	2020-09-15 00:33:01
159	1	c4804022000eeee476faf8492eec54	{"browser":"NetscapeChrome","browserMajorVersion":"85","browserVersion":"85.0.4183.102","os":"Windows","osVersion":"10"}	2020-09-15 04:48:35	2020-09-15 04:48:35
160	37	142888a48b2902c47db0ac02019162	{"browser":"NetscapeChrome","browserMajorVersion":"85","browserVersion":"85.0.4183.102","os":"Windows","osVersion":"10"}	2020-09-15 04:52:15	2020-09-15 04:52:15
161	33	ca12a4c54f854fd3992beaa83635e7	{"browser":"NetscapeChrome","browserMajorVersion":"85","browserVersion":"85.0.4183.102","os":"Windows","osVersion":"10"}	2020-09-15 07:28:18	2020-09-15 07:28:18
162	1	c4804022000eeee476faf8492eec54	{"browser":"NetscapeFirefox","browserMajorVersion":"80","browserVersion":"80.0","os":"Windows","osVersion":"10"}	2020-09-16 00:15:07	2020-09-16 00:15:07
163	36	673e0d5ee759607279f8bb09d723ff	{"browser":"NetscapeMicrosoft Edge","browserMajorVersion":"5","browserVersion":"5.0.564.51","os":"Windows","osVersion":"10"}	2020-09-16 00:15:37	2020-09-16 00:15:37
164	44	cfc387b20cc0a68407f5285859ba62	{"browser":"NetscapeChrome","browserMajorVersion":"85","browserVersion":"85.0.4183.102","os":"Windows","osVersion":"10"}	2020-09-18 00:23:30	2020-09-18 00:23:30
165	72	7b6f7b94e39598128307a7f28ffb8e	{"browser":"NetscapeChrome","browserMajorVersion":"85","browserVersion":"85.0.4183.102","os":"Windows","osVersion":"10"}	2020-09-18 07:49:32	2020-09-18 07:49:32
166	36	673e0d5ee759607279f8bb09d723ff	{"browser":"NetscapeChrome","browserMajorVersion":"85","browserVersion":"85.0.4183.121","os":"Windows","osVersion":"10"}	2020-09-24 00:21:25	2020-09-24 00:21:25
167	22	bd9d632eccb7a30716d1febc7d9afb	{"browser":"NetscapeChrome","browserMajorVersion":"85","browserVersion":"85.0.4183.121","os":"Windows","osVersion":"10"}	2020-09-24 05:48:53	2020-09-24 05:48:53
168	22	bd9d632eccb7a30716d1febc7d9afb	{"browser":"NetscapeFirefox","browserMajorVersion":"81","browserVersion":"81.0","os":"Windows","osVersion":"10"}	2020-09-24 05:49:41	2020-09-24 05:49:41
\.


--
-- Name: token_refeshes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('token_refeshes_id_seq', 168, true);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY users (id, avatar, email, password, first_name, last_name, first_name_furigana, last_name_furigana, birth_date, gender, post_code, pref, town, address, phone, role_id, online, socket_id, token_verify, active, deleted, remember_token, created_at, updated_at, admin_confirm, stripe_account_id, stripe_active) FROM stdin;
30	\N	gitkaraken@gmail.com	$2y$10$GYQEzw1ySYBtAn0L9E.EHerzy8vt1YHH2M6eFL58N3lSVRHQSTsb6	Kata họ tui	Kata tên tui	\N	Tên Tui	1991-02-02	2	164-0001	東京都	中野区, 中野	\N	02525252552	3	f	\N	e65d4e7e79f8fcff86602bb9060ddf	f	f	\N	2020-07-06 01:02:05	2020-07-06 01:02:05	0	\N	f
25	\N	kawovak664@wonwwf.com	$2y$10$ieW0cW/AExI3QNCDeASxXOXL7eDOsTYqOyzC4cPw33KpMBodc/jpq	ádas	adsd	\N	ádasd	2004-05-29	1	007-0840	北海道	札幌市東区, 北四十条東	北四十条東	0364975929	2	f	\N	9951763e64ebf942bbc7b3fc4ee275	f	f	\N	2020-07-01 04:58:46	2020-07-01 04:58:46	0	\N	f
35	/image/df_male.jpg	mqn08679@bcaoo.com	$2y$10$vrt28S/sBBm4lFhFIiSAcuzpvRezjWwWrCUrx6nCnuAgAMATO.kAm	ewqe	qưeqwe	\N	qưeq	2018-03-03	1	160-0001	東京都	新宿区, 片町	北四十条東	0364975929	2	f	\N	bdcc0aa29ac6273863394235d8527c	f	f	\N	2020-07-10 05:40:38	2020-07-10 05:40:38	0	\N	f
28	/storage/uploads/avatars/thumbnail/1593996084img_job01.jpg	babysittterstest@kartk5.com	$2y$10$gvxyCtrZkoz1sZLeCXsfceZc0SNdJjiRHDOV7J.3Zd1ger7Qa4dja	Ya	Da	\N	Tan	1984-11-16	2	112-2112	東京都	文京区,	331a nakano	0979477734	3	f	\N	0272f47f9f4b888152e047ee00dfcd	t	f	a6igd6WoGI7HR1vQvpQ7irs7YArTgmz3YEM2Tpjy9LL1tyY078NquLUua0FT	2020-07-03 05:39:40	2020-07-06 00:41:24	0	\N	f
32	\N	epsminhtrihue@gmail.com	$2y$10$J1gyMSKSV3T9wXiVog7LRO44oCwo3IgoVAPb0mWTBOi6d9PBRvs1q	TR	T	\N	Tri	1992-02-15	1	164-0001	東京都	中野区, 中野	333建物名・部屋番号	02525252552	3	f	\N	068e51aa6b7fba98596fa6da60d1e9	t	f	\N	2020-07-08 05:52:00	2020-07-21 04:41:38	0	\N	f
27	/storage/uploads/avatars/thumbnail/1593766960104372124_923985051400465_8287591145813158413_o.jpg	pilaf25488@trysubj.com	$2y$10$bYXUdj4sZqGePpT2RbCEa.JT7zTGVchfDEzHnD1/h.m2V/.rCAO2u	Tristina	Do	\N	TN	1970-11-18	2	161-0034	東京都	新宿区, 上落合	上落合	0979477734	2	f	\N	4da0d0245c474a495da136e19a8e14	t	f	mcfLsG9dmFSP36LZkqVoebuloPiJzT2KST0T9fwacszIQVMIIMDgHlFcH0mZ	2020-07-03 05:32:13	2020-07-22 07:50:29	1	\N	f
41	\N	s_tran1@management-partners.co.jp	$2y$10$BCa72gPj/cZ.c9Ni0207O.7G9hJ0zt8PcfqvqPX8T0DRL867K4hkq	フリガナ	フリガナ	\N	お名前	2020-01-01	2	163-0713	東京都	新宿区, 西新宿小田急第一生命ビル１３階	\N	1111111111	3	f	\N	fa5592eaf728442695d6a8fb6ac86e	f	f	\N	2020-07-20 00:44:58	2020-07-20 00:44:58	0	\N	f
40	\N	pakizabyo@heisei.be	$2y$10$7rIM1Fuc7hoqdYSP1XALKODu2cVOaxxnqYofuhRTUspBB0h59L/hq	マツウラ	サキ	\N	咲季	1983-10-06	2	259-1302	神奈川県	秦野市, 菩提2-11-12	ザ菩提307	09044958396	3	f	\N	310e638b5b8bb641f48bb120036895	f	f	\N	2020-07-17 04:21:46	2020-07-17 04:21:46	0	\N	f
39	/image/df_male.jpg	dgfsolomid3@gmail.com	$2y$10$VacuC3ogvThR0W79bsbfy.359sY7P8VaCI/75xdHRlmwNPfV4zfY2	TR	RR	\N	TRRR	2004-01-02	1	164-0001	東京都	中野区, 中野	・部屋番号	02525252552	3	f	\N	15fd8c07b8e4c30bea3ed2db9f097d	t	f	\N	2020-07-16 04:28:10	2020-07-31 08:11:34	0	\N	f
43	\N	pyogyozu374@cream.pink	$2y$10$ePrEhXJXAmFSK/DXHTJxbOFmUtSKVNPg/u3gFpydEJJrQ.hUIKdny	キシ	ハルオ	\N	春夫	1982-12-20	1	859-1102	長崎県	雲仙市吾妻町木場名1-13	吾妻町木場名ロイヤル416	0907880251	3	f	\N	9897cf4f146cd493991a4234c05c8f	f	f	\N	2020-07-20 05:44:58	2020-07-20 05:44:58	0	\N	f
44	\N	dgfsolomid1@gmail.com	$2y$10$gu4sjWluXTYt9j7gnxw4ZO3zGp.MhAk86Ne9fdXzhzcAZ39OuJ8v6	D	V	\N	DEV	1980-02-02	1	164-0001	東京都	中野区中野	009 990 0 番地以降(建物名・部屋番号など)番地以降(建物名・部屋番号など)	02525252552	3	f	\N	cc621d571d66f87532487780c90b3c	t	f	\N	2020-07-20 08:09:28	2020-07-20 08:10:52	0	\N	f
22	/storage/uploads/avatars/thumbnail/159540259249808011_1449556311845934_5408048434861047808_n.jpg	jbtruongthanhhung@gmail.com	$2y$10$uAsJ5ioJw6yBr8.BOQ2.0upzf3oqpwLoYedq0608q7gFMZJSUDo5i	Xà lỏn	dây thun giãn	\N	MuTê	1990-08-29	2	900-0012	沖縄県	那覇市, 泊	建物名・部屋番号	0907581480	3	f	\N	e2a0edf923586cc6297eebaf7c6b69	t	f	\N	2020-07-01 01:35:20	2020-07-22 07:23:12	0	cus_HzHGV54MIA32C1	t
33		dgfsolomid@gmail.com	$2y$10$zG4NYOvDC.0Qc72HPNRtbe04xS3vSJQdbYkxmffZobnfssltEcMRK	Trinh	Binh	\N	Thăng Bình	1979-03-14	1	164-0001	東京都	中野区, 中野	Dsdfsdf 建物名・部屋番号	02525252552	3	f	\N	a3df7d2d93f4919aa263944858652a	t	f	\N	2020-07-08 06:48:35	2020-09-15 07:34:48	0	cus_I1bufBNS8OYl6Z	f
31	/storage/uploads/avatars/thumbnail/1595897776z1983435957761_d8a4438347670d091f137dcfa65be2d0.jpg	thanhhung.tud@gmail.com	$2y$10$NPdgOmWmebQW6aeN3oceuufhAsfDTecvqFTvhc5YUg5ntM0tYoZ0u	tài	khoản 2	\N	ガナ ※	2008-10-17	2	900-0012	沖縄県	那覇市, 泊	sfdg	08043543534	2	f	\N	4df3a2091cbf68401913dbd5f8b5cf	t	f	\N	2020-07-06 07:12:46	2020-09-09 01:29:38	1	acct_1HPI7xGnTIwgOgTt	f
34	/storage/uploads/avatars/thumbnail/1594359556wj0000004538.jpg	odr38825@cuoly.com	$2y$10$Gnk1.4ckd4lfeBSNJ0adNedFuxp7R0cwdbi9zh6jUMsiG2k79KhN.	Test	Test	\N	Test	2006-10-17	1	007-0840	北海道	札幌市東区	北四十条東	0364975929	2	f	\N	f3411695bb97864b3c443a27c29ea1	t	f	\N	2020-07-10 05:36:19	2020-09-07 02:51:44	1	acct_1HOaSIAZQiohvpB7	f
23	\N	xayifak360@mail35.net	$2y$10$8HPR.cK51F6Nk7gZgYeDPOAX5xAoUndTX/1r6Vhtwc2UL8HOCrKAS	bui	名	\N	名	2017-03-03	2	007-0840	北海道	札幌市東区, 北四十条東	北四十条東	0364975929	2	f	\N	402b42f50fbc294cda25e399a5aa7e	t	f	\N	2020-07-01 01:48:29	2020-09-07 02:54:43	1	acct_1HOa8gLZqoXa6a5N	t
38	/storage/uploads/avatars/thumbnail/159618328220200627_044602.jpg	buitoan04051995@gmail.com	$2y$10$OJzw9TXtpvWeDGuYkm8AM..2wXAHKNK0RyuBkP0pdScrFOdU5h8NS	フ	名	\N	4	2007-02-04	1	007-0840	北海道	札幌市東区, 北四十条東	北四十条東	0364975929	2	f	\N	539657eb14f91e7fac31648a05a1c2	t	f	\N	2020-07-13 01:31:48	2020-09-14 00:56:54	1	acct_1HR600GCiB92NYuT	f
26	/storage/uploads/avatars/thumbnail/159494696775567434_171145764084311_5579921296491282432_o.jpg	epsminhtri@gmail.com	$2y$10$P8enPpXeVzhEyzhy6oGO5eH.EOVU5T3Quc4ygr4bn/xnfAHWtDnPS	Tran	Tr	\N	Tr	1993-10-16	1	164-0001	東京都	中野区, 中野	Add 建物名・部屋番号	09072021610	3	f	\N	f335bda11b74ad3ce76a0a725f344f	t	f	\N	2020-07-02 00:33:39	2020-09-18 07:36:16	0	cus_I2jbsDdV7rkzVK	f
1	/uploads/avatar.jpg	admin@gmail.com	$2y$10$q8ksGRpeGlaPHeWsBWkW..RLlOaUjlJQmGqZjIkaELRaRxsCAx4g6	○○○○	○○○○	first_name_furigana	last_name_furigana	1991-06-26	1	900-0012	pref	town	address	08033870674	1	f	\N	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9	t	f	ORrLpbLv0oeRRgC3Ui1RcTCjWxky8LDl0I26HDqtmUw3X7TPsDPosOj1mHBi	2020-06-25 08:27:34	2020-06-25 08:27:34	0	\N	f
37	/storage/uploads/avatars/thumbnail/1595221235MP_ロゴ.png	rda99159@bcaoo.com	$2y$10$H32JEpvMyDVJqX4eKaG/N.r0.8vE3lkMhCh4cgLDlPHnT25N5gyUm	Ya	Kun	\N	Kun	1980-02-02	1	163-0713	東京都	新宿区	西新宿2丁目7-1　小田急第一生命ビル15階	0908562693	3	f	\N	da0379d428d575a9e4b8ce58197d95	t	f	UchInHQjIFeW860XIw9s5FUYGZ08LKuT5EDLl8rW2ilQLsd4QrBA2KmNgzSY	2020-07-10 07:24:41	2020-09-16 08:50:49	0	cus_I20M22zV8Vh6S2	f
56	/storage/uploads/avatars/thumbnail/1596084138水色.jpg	ryurya181@fuwa.be	$2y$10$vWPIyMwR7Mx/qZ0d6wk3buxgn/yKOxhQg6llL1zIEf6EpRaLRrOAW	寺沢	松雄	\N	マツオ	1986-03-30	1	651-2215	兵庫県	神戸市西区	北山台3-5-17	09018681541	2	f	\N	fb5511f05ca1fa587bcb7d9f9c0227	t	f	\N	2020-07-30 04:24:23	2020-07-30 04:58:36	1	\N	f
42	/image/df_female.jpg	stran.anagerment1.partners@gmail.com	$2y$10$T69Wr062NXYOt0LzOQ3cUeoL7oDasFw4KqLknyoO66ZJCC64tHMhC	担当者	お名前	\N	フリガナ	2005-01-16	2	163-0713	東京都	新宿区, 西新宿小田急第一生命ビル１３階	\N	1111111111	2	f	\N	cedb954f338c6cbc7f34756782bfa7	f	f	\N	2020-07-20 00:47:43	2020-07-20 00:47:43	0	\N	f
52	/storage/uploads/avatars/thumbnail/1595397316wjmtUmDg_400x400.jpg	meryupamu@fanclub.pm	$2y$10$6BOk1htyiXCQR9jdTLII8.csV1O1KtY6/b7E5afjtfr2agT9JIFPS	ナカオ	ケンイチ	\N	研一	1979-10-10	1	235-0031	神奈川県	横浜市磯子区	新中原町3-20-8	08094998997	3	f	\N	07666b024a7194f54831fd3fab50d4	t	f	\N	2020-07-22 05:42:14	2020-07-29 05:36:31	0	\N	f
45		kyugyonu249@fuwa.be	$2y$10$nqStLtC5nc7DB11XMlKtAunPmdHWW//4YegRP3ljSn4m/KoMhvHm2	サカシタ	ツネオ	\N	常男	1999-09-13	1	670-0062	兵庫県	姫路市高岡新町2-9	\N	9074178032	3	f	\N	022b9e1f36a9bb4cf49224691f8bbb	t	f	vP0KEy0Hx1tGdWH3ZloovWLYNILC4d0bzOdtRrJVwV2JLzyyQWpuEn82r0pk	2020-07-21 02:03:30	2020-07-21 02:18:31	0	\N	f
46	/storage/uploads/avatars/thumbnail/1595298760img_job05.jpg	s_tran@management-partners.co.jp	$2y$10$anJ/YbtWprnIC4l2ddx9G.bbfNeML5QXNEildMHKTkjnjg3Hoo6vy	フリガナ	フリガナ	\N	お名前	2018-01-01	2	131-0043	東京都	墨田区立花	\N	1111111111	3	f	\N	c1990e9e513cf6296041d5ef6ebcae	t	f	\N	2020-07-21 02:13:55	2020-07-21 02:32:40	0	\N	f
48	/image/df_male.jpg	nee98224@bcaoo.com	$2y$10$u1GNJlTJS1hfvchYrF5FaO1PkuWQIe6lVI/B0Oi2AU1GzTuu3T6zK	フ	名	\N	名	2018-03-03	1	007-0840	北海道	札幌市東区, 北四十条東	北四十条東	0364975929	2	f	\N	b367774e73477e6ae899e757dfeaa3	f	f	\N	2020-07-21 04:16:01	2020-07-21 04:16:01	0	\N	f
55	/image/df_male.jpg	bak93945@cuoly.com	$2y$10$4R0ZMW34vxq3CgIUkM7IO.XUSB2j7aDlQxt3QLWVld5inUqTjD8xS	Toan	Test	\N	last	2005-02-18	1	007-0840	北海道	札幌市東区	北四十条東	06454564343	2	f	\N	1eb3c5c6202a43192fa712bb8f5289	t	f	\N	2020-07-30 03:08:48	2020-07-30 03:09:52	0	\N	f
50	/storage/uploads/avatars/thumbnail/1595378046img_avatar2.png	xzs37708@bcaoo.com	$2y$10$cqlzadZiZNXtu8gW4Zman.YLHJU/N0dGUqwxwjBaSNX0W8R6rTXbW	フ	名	\N	名	2005-10-17	1	007-0840	東京都	新宿区	北四十条東	0364975929	2	f	\N	c5b8f7f0826a629513b033c14ada5a	t	f	\N	2020-07-22 00:24:39	2020-07-22 07:50:10	1	\N	f
49	/storage/uploads/avatars/thumbnail/1595315559MP_ロゴ.png	mikuba@via.tokyo.jp	$2y$10$JByuTsJjTXEoCnhMExjrxeSbzyKNIMw/VRar/zqM.tKhg80lLzcaK	末永	鉄夫	\N	テツオ	1968-01-02	1	880-0303	宮崎県	宮崎市佐土原町東上那珂3-9-19	\N	09072885526	2	f	\N	478c49d7c0686d8aebe53d62c62652	t	f	ldmVNoHlCYYvGzq7bBhH4Vwre3oJCA3eiof6aDqDBuHbSEk1UdO6XSvpwpch	2020-07-21 07:09:00	2020-07-27 01:22:38	2	\N	f
53	/storage/uploads/avatars/thumbnail/1596000309pikatyuu.png	rugyu2@cream.pink	$2y$10$1Dc0C1QwwMM9tzhEUZKbvuDkxhBq7I1RHeIOUKOJw7EjbGnFTIKfW	北沢	花乃子	\N	カノコ	1993-07-12	2	788-0032	高知県	宿毛市錦1-2-2001	\N	08056193718	2	f	\N	d94795be99f8403aea0dfb5c73f424	t	f	hJ8XaDLFKHjil0DbQ1auP7I971HORbCdMSC3rFkmR1FJi7f9umDlEc5IpbEe	2020-07-29 04:55:28	2020-07-29 05:25:09	1	\N	f
58	/image/df_female.jpg	vejoja3999@ofmailer.net	$2y$10$LteizoK624E/rOrGhDA3oepsAKzBRXbV.fIgUK7kAfOo0jT2T1RE.	Thuan	Tex	\N	tex	2003-11-18	2	164-0002	東京都	中野区	上高田	0123456597	2	f	\N	1304b6cee82e2aae5ab2118069d43f	t	f	\N	2020-07-30 05:15:33	2020-07-30 08:23:58	1	\N	f
47	/image/df_female.jpg	pe87@fanclub.pm	$2y$10$jtgovAF4JHVdOG4Ka9E/2O2HGlrHtRXQBuu8av4OYbWw1qqYGOBc.	野間	莉桜	\N	リオ	1965-03-26	2	101-0044	東京都	千代田区 鍛冶町1-11-15	ゴールデン鍛冶町107	09035406244	2	f	\N	665052d0bb6904846f1e9abafb431f	t	f	\N	2020-07-21 02:25:46	2020-07-27 07:31:00	2	\N	f
51	/storage/uploads/avatars/thumbnail/1595395886MP_ロゴ.png	ryamyutu685@usako.net	$2y$10$E0p675IQb7hh6dHdg4Snl.m2y.m9JmIxdAj.7v.HspAy21cQxbAQS	田崎	華乃	\N	カノ	1994-10-16	2	795-0021	愛媛県	大洲市平野町野田3-8-2006	\N	9030036595	2	f	\N	e50c980b97865ba3a2f498806b090c	t	f	\N	2020-07-22 04:39:47	2020-07-30 05:49:37	2	\N	f
57	/storage/uploads/avatars/thumbnail/1596087028ダウンロード.jpg	bafota928@merry.pink	$2y$10$pFW7lv4ONwm8XDsIyfwCi.eiH7gQfcmDTvC5qGuiDX6C9XTTH8cQ2	井村	優雅	\N	ユウガ	1995-02-19	1	922-0835	石川県	加賀市	細坪町2-10	08060727580	2	f	\N	7e982eebff3370528678032668ec4e	t	f	\N	2020-07-30 05:11:04	2020-07-30 05:30:29	1	\N	f
62	/image/df_male.jpg	fay65618@bcaoo.com	$2y$10$PbNsRAyjgHVSjO4lXxd9ouAlB5PkOqYzIfaw7FsPw668iSrWXzx.q	sdad	12	\N	12	2012-02-29	1	163-0071	東京都	新宿区	qưeqe	0345617441	2	f	\N	8d113dcbb706e3a93282f7fd1c7482	f	f	\N	2020-07-31 00:28:51	2020-07-31 00:28:51	0	\N	f
61	\N	hm.thuan922221@gmail.com	$2y$10$Oo0PtXYpf1wrbvJlTqJ2AeRZW9nHhFzO7TLEYy7/a5sYq.LHKdUBm	Thuan	SDS	\N	SDS	2012-02-29	2	164-0001	東京都	中野区	中野	7013456868	3	f	\N	20dcaa6fddb1df3b4f5d4b61760088	f	f	\N	2020-07-31 00:10:09	2020-07-31 00:10:09	0	\N	f
63	/image/df_male.jpg	yvj44384@eoopy.com	$2y$10$LvEl9131D.vwvPQK.wtgTOj/NTl2a20z//9cb49X/3vQ4.Woz0lH2	eqw	qưeqw	\N	qưeqw	2008-02-29	1	163-0071	東京都	新宿区	123	0345617441	2	f	\N	6be79a0ba425eabaf719ccaddfce5c	f	f	\N	2020-07-31 00:31:18	2020-07-31 00:31:18	0	\N	f
64	/image/df_female.jpg	test@abc.com	$2y$10$QZxHsWYgFSxqoXziiVRCCeQ8P03Pbx.WXG1gxnENacqWmENGpw.Oi	お名前	お名前	\N	フリガナ	2020-02-29	2	131-0041	東京都	墨田区	八広	1111111111	2	f	\N	4614880da70a3a74a3531ba068a27c	f	f	\N	2020-07-31 00:55:43	2020-07-31 00:55:43	0	\N	f
65	\N	abc@abc.com	$2y$10$pQgptoYvvge7I85MRiExi.EAr07Bj7SpPFhnL1YdNVALFpwdTWbsW	リガナフリガナ	フ	\N	お名前	2020-02-29	2	131-0041	東京都	墨田区	八広	1111111111	3	f	\N	cd1b877b10f82968736dadc7d7c34e	f	f	\N	2020-07-31 01:05:41	2020-07-31 01:05:41	0	\N	f
66	/image/df_female.jpg	hm.thuan91@gmail.com	$2y$10$iuAuW1r0clhxBnFM0MWO6eIfaMg43P09EonhwA7QVhvLlPdO6UKK.	Thuan	SDS	\N	SDS	2020-02-29	2	164-0001	東京都	中野区	中野	7013456868	2	f	\N	9e57bfcffffd4717760ffe0c89e760	f	f	\N	2020-07-31 01:10:32	2020-07-31 01:10:32	0	\N	f
67	/image/df_male.jpg	fbs65976@eoopy.com	$2y$10$rGb7cWbzxcGZufUvPk4H0O.wuiMRZ9QknFM1DPyDNKHYPKt0M7gw.	eqwe	qưeq	\N	名	2019-02-02	1	007-0840	北海道	札幌市東区	北四十条東	0364975929	2	f	\N	0f7e673d8c0e5391e813cd5d9a2ffb	f	f	\N	2020-07-31 01:16:38	2020-07-31 01:16:38	0	\N	f
68	\N	idx56659@eoopy.com	$2y$10$My5A8b2IEzmMqizQkJVsUuJi/3qlEnPt1qtCCSOZ70L4caf1ekc8m	bui	toan	\N	名	2020-02-29	1	007-0840	北海道	札幌市東区	北四十条東	0364975929	3	f	\N	4667cdd4b81dcfa634a626e93c0493	f	f	\N	2020-07-31 01:19:45	2020-07-31 01:19:45	0	\N	f
69	/image/df_male.jpg	gobyategu@mbox.re	$2y$10$6moonid/xYqqIr1gO9tfw.FzaVQjvV/8d0dRXk4T.wa5jd82gIA0q	サエキ	ゼンタロウ	\N	善太郎	1995-01-31	1	220-0002	神奈川県	横浜市西区	南軽井沢2-18	08072580427	3	f	\N	1e8c36fd6a011fe454889e304df545	t	f	\N	2020-08-03 07:02:50	2020-09-16 00:56:44	1	\N	f
54	\N	yaryotisu@nagi.be	$2y$10$UhoBeslbE1t/XH1gy3cYjuWAAVygEzr0rb7x9sMtSC6Qm13u.sGTq	タカヤマ	ヤスフミ	\N	泰史	1990-10-09	1	310-0803	茨城県	水戸市	城南3-10-14城南グリーン301	08019967390	3	f	\N	cef539e8cf5e6b17fa373c8d4940d7	t	f	\N	2020-07-29 05:38:14	2020-09-16 00:57:38	2	\N	f
70	/image/df_female.jpg	pamibapi@macr2.com	$2y$10$bSSsx2Oo5UY1uR7Dz.go5e2aHVNBHf5wKvANd.48IorLSJ8Th30LC	福井	実優	\N	ミユ	1992-03-03	2	904-2425	沖縄県	うるま市	与那城桃原2-18-1	09026801658	2	f	\N	06043dc8467dc307e7a2ddf0abea4b	t	f	\N	2020-08-03 08:09:40	2020-08-12 08:18:42	1	\N	f
71	/image/df_male.jpg	rlp54777@cuoly.com	$2y$10$X.jF.n9XyA9b746WYL7TVuu8lEcvkwzJUxykrJbOrmfkygfxe5J.C	emploey	emploey	\N	emploey	2005-05-27	1	007-0840	北海道	札幌市東区	北四十条東	0316542114	3	f	\N	755621d9f5db747e3a71334f0e2035	f	f	\N	2020-08-13 04:55:20	2020-08-13 04:55:20	0	\N	f
60	/storage/uploads/avatars/thumbnail/1596094517ダウンロード (1).jpg	manya24@moimoi.re	$2y$10$SdmZUxmDazT5ZgpVeepooOgouJ7bLLed1VqBXU3Sr9XsO3LNJZpsG	熊沢	正勝	\N	マサカツ	1968-01-17	1	163-0713	東京都	新宿区	西新宿小田急第一生命ビル１３階	09071668685	2	f	\N	cf9b877662785e26450779fe45b98c	t	f	k3HfBzuZYIb38bQZ6p59uciQB2QyIuqi5DeSfAyv3SX29UFUZK3Hlyq9dgRh	2020-07-30 07:12:48	2020-07-30 07:35:17	1	\N	f
29	/storage/uploads/avatars/thumbnail/159912264992912542_223204509001080_5437823884051087360_n.jpg	buitoan0405@gmail.com	$2y$10$wyP9WvyEUOOwxst3Ngnoq.zsKApXWL5HWlWcURnSSHVLMNA0i6ByK	Bùi	Toàn	\N	Toàn	2014-11-11	1	007-0841	北海道	札幌市東区, 北四十一条東	520 Cách mạng tháng 8, quận 3	0364975929	2	f	\N	a879e5e34a757673d95bd12d69dc3b	t	f	87lV3gACOOrSbgJMVoEhUcYwZNM1CGWPbum5tzyC4L3bsJeyPH92kPQ7MIac	2020-07-04 06:15:39	2020-09-03 08:44:09	1	acct_1HNDtXARyJxhilqB	t
59	\N	rapapope@cream.pink	$2y$10$KQMu2Z9/cFTeDr.X5PAhluusy7NshnOuOlLmPPl3D8YoAM4kFtgOO	コンノ	トシカツ	\N	利勝	1988-10-17	1	926-0828	石川県	七尾市	白馬町3-4	9061211270	3	f	\N	5eee41ce1ce5e7f98bec4f66ebc22e	t	f	\N	2020-07-30 06:55:06	2020-09-09 00:38:50	1	\N	f
36	/storage/uploads/avatars/thumbnail/1594366060images (2).jpg	fewebe7913@pastmao.com	$2y$10$oeTmpuhwcgENKs/.BIB/VeLAdIzdBgiSIDMFGOVpiy9WPBK4Z4xN2	SITTER	TEST	\N	TEST	1973-11-20	2	164-0001	東京都	中野区, 中野	建物名・部屋番号	01354698825	2	f	\N	d082f8a8fc3631904aee28158a3b7b	t	f	4u2KEpPFFKlZgDs7fOP2O3YeuseVDXTB9uiqvuL1X6bAmF1J6oSmtLu9EATB	2020-07-10 07:24:05	2020-09-07 02:41:34	1	acct_1HNTLwHVbwnXcVyU	t
24	/storage/uploads/avatars/thumbnail/1594803075z1969046783979_4e570b622414266d1f9f577bc0138dbd.jpg	thanhhung.dev@gmail.com	$2y$10$u.b7Uhf7ITCd09SGuCoe0.zh5/dsMi.eCImj48XAmq8PQ8skJEo6y	Têndàidằngdặc đọcxongđừngsặc chỉthíchlairai mặcbạnlàai khôngrảnhđâumà	Tênmìnhngắnlắm nhưngđểgiảithích thànhranómới dàinhưthếnày	\N	Datrắngmặtxinh Thânhìnhcựcchuẩn Nhưnghơingusuẩn TêmìnhlàHùng	2004-11-15	2	900-0012	沖縄県	那覇市, 泊	泊tokyo35443	0907581480	2	f	\N	f6fb2613d4c28355e11b5bde48004c	t	f	\N	2020-07-01 01:51:53	2020-09-11 05:10:26	1	acct_1HOa8gLZqoXa6a5N	t
72	/storage/uploads/avatars/thumbnail/1600415416mtruoc.jpg	dgfsolomid2@gmail.com	$2y$10$ZT5fVkc30pPsFXmQJEzZ6eqFMcTrdJlQoh3nDIidY33Mmg/NWuWdu	DG	F	\N	F	2005-12-19	1	164-0001	東京都	中野区	中野	02525252552	2	f	\N	71de1e92e37d4c98cdd5cc73aa2b67	t	f	\N	2020-09-18 07:43:53	2020-09-18 07:50:16	1	acct_1HSeJLLbFyA74LmQ	t
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('users_id_seq', 72, true);


--
-- Data for Name: verify_emails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY verify_emails (id, user_id, token_verify, email_verified_at, email_expire_at, created_at, updated_at) FROM stdin;
46	50	c5b8f7f0826a629513b033c14ada5a	2020-07-22 00:26:11	2020-07-23 00:24:39	2020-07-22 00:24:39	2020-07-22 00:26:11
48	52	07666b024a7194f54831fd3fab50d4	2020-07-22 05:53:06	2020-07-23 05:42:14	2020-07-22 05:42:14	2020-07-22 05:53:06
43	47	665052d0bb6904846f1e9abafb431f	\N	2020-07-28 07:31:00	2020-07-21 02:25:46	2020-07-27 07:31:00
34	38	539657eb14f91e7fac31648a05a1c2	2020-07-27 07:33:24	2020-07-28 07:32:43	2020-07-13 01:31:48	2020-07-27 07:33:24
49	53	d94795be99f8403aea0dfb5c73f424	2020-07-29 04:57:04	2020-07-30 04:55:28	2020-07-29 04:55:28	2020-07-29 04:57:04
18	22	e2a0edf923586cc6297eebaf7c6b69	2020-07-01 01:39:43	2020-07-02 01:35:20	2020-07-01 01:35:20	2020-07-01 01:39:43
19	23	402b42f50fbc294cda25e399a5aa7e	2020-07-01 01:51:11	2020-07-02 01:48:29	2020-07-01 01:48:29	2020-07-01 01:51:11
20	24	f6fb2613d4c28355e11b5bde48004c	2020-07-01 01:54:24	2020-07-02 01:51:53	2020-07-01 01:51:53	2020-07-01 01:54:24
21	25	9951763e64ebf942bbc7b3fc4ee275	\N	2020-07-02 04:58:46	2020-07-01 04:58:46	2020-07-01 04:58:46
22	26	f335bda11b74ad3ce76a0a725f344f	2020-07-02 01:57:52	2020-07-03 00:33:39	2020-07-02 00:33:39	2020-07-02 01:57:52
23	27	4da0d0245c474a495da136e19a8e14	2020-07-03 05:33:59	2020-07-04 05:32:13	2020-07-03 05:32:13	2020-07-03 05:33:59
24	28	0272f47f9f4b888152e047ee00dfcd	2020-07-03 05:43:05	2020-07-04 05:39:40	2020-07-03 05:39:40	2020-07-03 05:43:05
25	29	a879e5e34a757673d95bd12d69dc3b	2020-07-04 06:17:14	2020-07-05 06:15:39	2020-07-04 06:15:39	2020-07-04 06:17:14
26	30	e65d4e7e79f8fcff86602bb9060ddf	\N	2020-07-07 01:02:05	2020-07-06 01:02:05	2020-07-06 01:02:05
27	31	4df3a2091cbf68401913dbd5f8b5cf	2020-07-06 07:27:13	2020-07-07 07:12:46	2020-07-06 07:12:46	2020-07-06 07:27:13
28	32	068e51aa6b7fba98596fa6da60d1e9	2020-07-08 05:55:16	2020-07-09 05:52:00	2020-07-08 05:52:00	2020-07-08 05:55:16
29	33	a3df7d2d93f4919aa263944858652a	2020-07-08 07:00:47	2020-07-09 06:48:35	2020-07-08 06:48:35	2020-07-08 07:00:47
30	34	f3411695bb97864b3c443a27c29ea1	2020-07-10 05:38:01	2020-07-11 05:36:19	2020-07-10 05:36:19	2020-07-10 05:38:01
31	35	bdcc0aa29ac6273863394235d8527c	\N	2020-07-11 05:40:38	2020-07-10 05:40:38	2020-07-10 05:40:38
32	36	d082f8a8fc3631904aee28158a3b7b	2020-07-10 07:27:09	2020-07-11 07:24:05	2020-07-10 07:24:05	2020-07-10 07:27:09
33	37	da0379d428d575a9e4b8ce58197d95	2020-07-10 07:28:00	2020-07-11 07:24:41	2020-07-10 07:24:41	2020-07-10 07:28:00
35	39	15fd8c07b8e4c30bea3ed2db9f097d	2020-07-16 04:33:14	2020-07-17 04:28:10	2020-07-16 04:28:10	2020-07-16 04:33:14
36	40	310e638b5b8bb641f48bb120036895	\N	2020-07-18 04:21:46	2020-07-17 04:21:46	2020-07-17 04:21:46
37	41	fa5592eaf728442695d6a8fb6ac86e	\N	2020-07-21 00:44:58	2020-07-20 00:44:58	2020-07-20 00:44:58
38	42	cedb954f338c6cbc7f34756782bfa7	\N	2020-07-21 00:47:43	2020-07-20 00:47:43	2020-07-20 00:47:43
39	43	9897cf4f146cd493991a4234c05c8f	\N	2020-07-21 05:44:58	2020-07-20 05:44:58	2020-07-20 05:44:58
40	44	cc621d571d66f87532487780c90b3c	2020-07-20 08:10:52	2020-07-21 08:09:28	2020-07-20 08:09:28	2020-07-20 08:10:52
41	45	022b9e1f36a9bb4cf49224691f8bbb	2020-07-21 02:14:22	2020-07-22 02:03:30	2020-07-21 02:03:30	2020-07-21 02:14:22
42	46	c1990e9e513cf6296041d5ef6ebcae	2020-07-21 02:32:11	2020-07-22 02:13:55	2020-07-21 02:13:55	2020-07-21 02:32:11
44	48	b367774e73477e6ae899e757dfeaa3	\N	2020-07-22 04:16:01	2020-07-21 04:16:01	2020-07-21 04:16:01
45	49	478c49d7c0686d8aebe53d62c62652	2020-07-21 07:11:33	2020-07-22 07:09:00	2020-07-21 07:09:00	2020-07-21 07:11:33
51	55	1eb3c5c6202a43192fa712bb8f5289	2020-07-30 03:09:52	2020-07-31 03:08:48	2020-07-30 03:08:48	2020-07-30 03:09:52
52	56	fb5511f05ca1fa587bcb7d9f9c0227	2020-07-30 04:31:08	2020-07-31 04:24:23	2020-07-30 04:24:23	2020-07-30 04:31:08
53	57	7e982eebff3370528678032668ec4e	2020-07-30 05:12:50	2020-07-31 05:11:04	2020-07-30 05:11:04	2020-07-30 05:12:50
47	51	e50c980b97865ba3a2f498806b090c	\N	2020-07-31 05:49:37	2020-07-22 04:39:47	2020-07-30 05:49:37
55	59	5eee41ce1ce5e7f98bec4f66ebc22e	2020-07-30 06:59:16	2020-07-31 06:55:06	2020-07-30 06:55:06	2020-07-30 06:59:16
56	60	cf9b877662785e26450779fe45b98c	2020-07-30 07:16:15	2020-07-31 07:12:48	2020-07-30 07:12:48	2020-07-30 07:16:15
54	58	1304b6cee82e2aae5ab2118069d43f	\N	2020-07-31 08:22:22	2020-07-30 05:15:33	2020-07-30 08:22:22
57	61	20dcaa6fddb1df3b4f5d4b61760088	\N	2020-08-01 00:10:09	2020-07-31 00:10:09	2020-07-31 00:10:09
58	62	8d113dcbb706e3a93282f7fd1c7482	\N	2020-08-01 00:28:51	2020-07-31 00:28:51	2020-07-31 00:28:51
59	63	6be79a0ba425eabaf719ccaddfce5c	\N	2020-08-01 00:31:18	2020-07-31 00:31:18	2020-07-31 00:31:18
60	64	4614880da70a3a74a3531ba068a27c	\N	2020-08-01 00:55:43	2020-07-31 00:55:43	2020-07-31 00:55:43
61	65	cd1b877b10f82968736dadc7d7c34e	\N	2020-08-01 01:05:41	2020-07-31 01:05:41	2020-07-31 01:05:41
62	66	9e57bfcffffd4717760ffe0c89e760	\N	2020-08-01 01:10:32	2020-07-31 01:10:32	2020-07-31 01:10:32
63	67	0f7e673d8c0e5391e813cd5d9a2ffb	\N	2020-08-01 01:16:38	2020-07-31 01:16:38	2020-07-31 01:16:38
64	68	4667cdd4b81dcfa634a626e93c0493	\N	2020-08-01 01:19:45	2020-07-31 01:19:45	2020-07-31 01:19:45
65	69	1e8c36fd6a011fe454889e304df545	2020-08-03 07:08:04	2020-08-04 07:02:50	2020-08-03 07:02:50	2020-08-03 07:08:04
66	70	06043dc8467dc307e7a2ddf0abea4b	2020-08-03 08:12:21	2020-08-04 08:09:40	2020-08-03 08:09:40	2020-08-03 08:12:21
67	71	755621d9f5db747e3a71334f0e2035	\N	2020-08-14 04:55:20	2020-08-13 04:55:20	2020-08-13 04:55:20
50	54	cef539e8cf5e6b17fa373c8d4940d7	\N	2020-09-17 00:57:38	2020-07-29 05:38:14	2020-09-16 00:57:38
68	72	71de1e92e37d4c98cdd5cc73aa2b67	\N	2020-09-19 07:46:19	2020-09-18 07:43:53	2020-09-18 07:46:19
\.


--
-- Name: verify_emails_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('verify_emails_id_seq', 68, true);


--
-- Data for Name: verify_rates; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY verify_rates (id, user_id, sitter_id, token, verified_at, expire_at, created_at, updated_at) FROM stdin;
2	37	60	95b8693e912038e5cfdf9d63c3e7fc	2020-08-18 08:34:09	2020-08-19 08:33:27	2020-08-18 08:33:27	2020-08-18 08:34:09
1	69	60	55dafc492350402caadb80e819adce	2020-08-18 08:31:32	2020-08-19 08:55:10	2020-08-18 08:28:57	2020-08-18 08:55:10
3	52	29	ec71d2f9ece0c2e8cc701c33979cce	2020-08-18 08:56:52	2020-08-20 02:23:26	2020-08-18 08:53:34	2020-08-19 02:23:26
\.


--
-- Name: verify_rates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('verify_rates_id_seq', 3, true);


--
-- Name: activity_experiences_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY activity_experiences
    ADD CONSTRAINT activity_experiences_pkey PRIMARY KEY (id);


--
-- Name: activity_skills_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY activity_skills
    ADD CONSTRAINT activity_skills_pkey PRIMARY KEY (id);


--
-- Name: bookings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY bookings
    ADD CONSTRAINT bookings_pkey PRIMARY KEY (id);


--
-- Name: date_bookings_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY date_bookings
    ADD CONSTRAINT date_bookings_pkey PRIMARY KEY (id);


--
-- Name: employer_profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY employer_profiles
    ADD CONSTRAINT employer_profiles_pkey PRIMARY KEY (id);


--
-- Name: experiences_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY experiences
    ADD CONSTRAINT experiences_pkey PRIMARY KEY (id);


--
-- Name: failed_jobs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY failed_jobs
    ADD CONSTRAINT failed_jobs_pkey PRIMARY KEY (id);


--
-- Name: families_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY families
    ADD CONSTRAINT families_pkey PRIMARY KEY (id);


--
-- Name: galaries_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY galaries
    ADD CONSTRAINT galaries_pkey PRIMARY KEY (id);


--
-- Name: migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);


--
-- Name: orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- Name: password_reset_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY password_reset
    ADD CONSTRAINT password_reset_pkey PRIMARY KEY (id);


--
-- Name: payments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY payments
    ADD CONSTRAINT payments_pkey PRIMARY KEY (id);


--
-- Name: payouts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY payouts
    ADD CONSTRAINT payouts_pkey PRIMARY KEY (id);


--
-- Name: refunds_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY refunds
    ADD CONSTRAINT refunds_pkey PRIMARY KEY (id);


--
-- Name: salaries_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY salaries
    ADD CONSTRAINT salaries_pkey PRIMARY KEY (id);


--
-- Name: schedules_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY schedules
    ADD CONSTRAINT schedules_pkey PRIMARY KEY (id);


--
-- Name: sitter_profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY sitter_profiles
    ADD CONSTRAINT sitter_profiles_pkey PRIMARY KEY (id);


--
-- Name: sitter_reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY sitter_reviews
    ADD CONSTRAINT sitter_reviews_pkey PRIMARY KEY (id);


--
-- Name: sitters_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY sitters
    ADD CONSTRAINT sitters_pkey PRIMARY KEY (id);


--
-- Name: skills_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY skills
    ADD CONSTRAINT skills_pkey PRIMARY KEY (id);


--
-- Name: token_refeshes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY token_refeshes
    ADD CONSTRAINT token_refeshes_pkey PRIMARY KEY (id);


--
-- Name: users_email_unique; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_email_unique UNIQUE (email);


--
-- Name: users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: verify_emails_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY verify_emails
    ADD CONSTRAINT verify_emails_pkey PRIMARY KEY (id);


--
-- Name: verify_rates_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY verify_rates
    ADD CONSTRAINT verify_rates_pkey PRIMARY KEY (id);


--
-- Name: activity_experiences_experience_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activity_experiences
    ADD CONSTRAINT activity_experiences_experience_id_foreign FOREIGN KEY (experience_id) REFERENCES experiences(id) ON DELETE CASCADE;


--
-- Name: activity_experiences_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activity_experiences
    ADD CONSTRAINT activity_experiences_user_id_foreign FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- Name: activity_skills_skill_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activity_skills
    ADD CONSTRAINT activity_skills_skill_id_foreign FOREIGN KEY (skill_id) REFERENCES skills(id) ON DELETE CASCADE;


--
-- Name: activity_skills_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY activity_skills
    ADD CONSTRAINT activity_skills_user_id_foreign FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- Name: bookings_employer_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY bookings
    ADD CONSTRAINT bookings_employer_id_foreign FOREIGN KEY (employer_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- Name: bookings_sitter_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY bookings
    ADD CONSTRAINT bookings_sitter_id_foreign FOREIGN KEY (sitter_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- Name: date_bookings_booking_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY date_bookings
    ADD CONSTRAINT date_bookings_booking_id_foreign FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE;


--
-- Name: employer_profiles_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY employer_profiles
    ADD CONSTRAINT employer_profiles_user_id_foreign FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- Name: families_id_profile_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY families
    ADD CONSTRAINT families_id_profile_foreign FOREIGN KEY (id_profile) REFERENCES employer_profiles(id) ON DELETE CASCADE;


--
-- Name: galaries_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY galaries
    ADD CONSTRAINT galaries_user_id_foreign FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- Name: orders_booking_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY orders
    ADD CONSTRAINT orders_booking_id_foreign FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE;


--
-- Name: password_reset_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY password_reset
    ADD CONSTRAINT password_reset_user_id_foreign FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- Name: payments_order_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY payments
    ADD CONSTRAINT payments_order_id_foreign FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE;


--
-- Name: payments_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY payments
    ADD CONSTRAINT payments_user_id_foreign FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- Name: salaries_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY salaries
    ADD CONSTRAINT salaries_user_id_foreign FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- Name: schedules_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY schedules
    ADD CONSTRAINT schedules_user_id_foreign FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- Name: sitter_profiles_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY sitter_profiles
    ADD CONSTRAINT sitter_profiles_user_id_foreign FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- Name: sitter_reviews_sitter_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY sitter_reviews
    ADD CONSTRAINT sitter_reviews_sitter_id_foreign FOREIGN KEY (sitter_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- Name: sitters_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY sitters
    ADD CONSTRAINT sitters_user_id_foreign FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- Name: token_refeshes_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY token_refeshes
    ADD CONSTRAINT token_refeshes_user_id_foreign FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- Name: verify_emails_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY verify_emails
    ADD CONSTRAINT verify_emails_user_id_foreign FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- Name: verify_rates_user_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY verify_rates
    ADD CONSTRAINT verify_rates_user_id_foreign FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

